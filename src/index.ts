import { error } from 'console';
import { exit } from 'process';
import { config as configDotenv } from 'dotenv';
import { remoteConfig } from 'firebase-admin';
import { cert, initializeApp } from 'firebase-admin/app';
import { ZodError } from 'zod';

import { allI18n } from './all-i18n';
import { schema } from './validator';

export const get = async () => {
  configDotenv();

  if (!process.env.FIREBASE_AUTH_DEV) {
    throw new Error('Não foi possível conectar no Firebase');
  }

  const buff = Buffer.from(process.env.FIREBASE_AUTH_DEV, 'base64');
  const text = buff.toString('ascii');
  initializeApp({ credential: cert(JSON.parse(text)) });
  const config = remoteConfig();
  const fullConfig = await config.getTemplate();

  let keyBreak = '';
  try {
    Object.keys(allI18n).forEach((key) => {
      keyBreak = key;
      const i18n = allI18n[key as keyof typeof allI18n];
      schema.parse(i18n);
      fullConfig.parameterGroups['localization'].parameters[
        key.replace('-', '_')
      ] = {
        defaultValue: {
          value: JSON.stringify(i18n),
        },
        valueType: 'JSON',
      };
    });
  } catch (e) {
    const zodError = e as ZodError;

    if (zodError.issues[0].code === 'unrecognized_keys') {
      error(
        `Error on ${keyBreak} language, ${
          zodError.issues[0].message
        } on: ${zodError.issues[0].path.join('>')}`,
      );
    }

    exit(1);
  }

  await config.validateTemplate(fullConfig);

  if (process.env.PUBLISH === 'true') {
    await config.publishTemplate(fullConfig);
  }
};

get();
