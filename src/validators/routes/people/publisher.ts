import { z } from 'zod';

import { optionalString } from '~/validators/consts';

import { recordsGridValidator } from './records-grid';

export const publisherValidator = z
  .object({
    publishers: z.object({
      table: z.object({
        name: optionalString,
        surname: optionalString,
      }),
      tabs: z.object({
        information: optionalString,
        spiritual: optionalString,
        assign: optionalString,
        records: optionalString,
        emergency: optionalString,
      }),
      'information-form': z.object({
        name: optionalString,
        surname: optionalString,
      }),
      'spiritual-form': z.object({
        baptism: optionalString,
        auxiliary: optionalString,
        regular: optionalString,
        elder: optionalString,
        servant: optionalString,
        'last-report': optionalString,
      }),
      'assign-form': z.object({}),
      'records-grid': recordsGridValidator,
      'emergency-form': z.object({}),
    }),
  })
  .strict();
