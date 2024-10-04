import { z } from 'zod';

import { optionalString } from './consts';

export const commonValidator = z
  .object({
    new: optionalString,
    save: optionalString,
    edit: optionalString,
    delete: optionalString,
    yes: optionalString,
    no: optionalString,
    'go-back': optionalString,
    'no-date': optionalString,
    'navegation-next-button': optionalString,
    'navegation-back-button': optionalString,
    'empty-state': z.object({
      title: optionalString,
      description: optionalString,
      button: optionalString,
    }),
    errors: z.object({
      'required-field': optionalString,
      'invalid-field-link': optionalString,
      'invalid-field': optionalString,
      'error-title': optionalString,
      'bad-request': optionalString,
      '400-description': optionalString,
      'unauthorized-request': optionalString,
      '401-description': optionalString,
      'forbidden-request': optionalString,
      '403-description': optionalString,
      'not-found-request': optionalString,
      '404-description': optionalString,
      'invalid-file-size': optionalString,
      'invalid-file-type': optionalString,
    }),
  })
  .strict();
