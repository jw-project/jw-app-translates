import { optionalString } from 'src/validators/consts';
import { z } from 'zod';

export const eventsValidator = z
  .object({
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
