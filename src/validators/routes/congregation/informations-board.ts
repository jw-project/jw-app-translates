import { z } from 'zod';

import { optionalString } from '~/validators/consts';

export const informationsBoardValidator = z
  .object({
    'delete-modal': optionalString,
    'delete-modal_plural': optionalString,
    table: z.object({
      information: optionalString,
      date: optionalString,
      actions: optionalString,
    }),
    form: z.object({
      type: optionalString,
      title: optionalString,
      description: optionalString,
      link: optionalString,
      'start-date': optionalString,
      'end-date': optionalString,
      errors: z.object({
        'end-date-before-start-date': optionalString,
      }),
    }),
  })
  .strict();
