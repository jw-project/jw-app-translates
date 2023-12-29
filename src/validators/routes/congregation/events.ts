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
      start_date: optionalString,
      start_time: optionalString,
      end_date: optionalString,
      end_time: optionalString,
    }),
  })
  .strict();
