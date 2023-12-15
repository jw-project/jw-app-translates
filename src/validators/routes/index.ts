import { z } from 'zod';

import { optionalString } from '../consts';

export const indexValidator = z
  .object({
    welcome: optionalString,
    'login-not-found': optionalString,
    'include-email-in-profile': optionalString,
    'refresh-page': optionalString,
    'reload-button': optionalString,
    'new-congregation-text': optionalString,
    'access-congregation-button': optionalString,
  })
  .strict();
