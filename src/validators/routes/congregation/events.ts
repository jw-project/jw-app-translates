import { z } from 'zod';

import { optionalString } from '../../consts';

export const eventsValidator = z
  .object({
    'delete-modal': optionalString,
    'delete-modal_plural': optionalString,
    table: z.object({
      event: optionalString,
      date: optionalString,
      actions: optionalString,
    }),
    form: z.object({
      type: optionalString,
      name: optionalString,
      description: optionalString,
      link: optionalString,
      'start-date': optionalString,
      'start-time': optionalString,
      'end-date': optionalString,
      'end-time': optionalString,
      errors: z.object({
        'end-date-before-start-date': optionalString,
      }),
    }),
  })
  .strict();
