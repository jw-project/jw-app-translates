import { z } from 'zod';

import { optionalString } from './consts';

export const menuValidator = z
  .object({
    categories: z
      .object({
        congregation: optionalString,
        people: optionalString,
      })
      .strict(),
    congregation: optionalString,
    groups: optionalString,
    events: optionalString,
    informationsBoard: optionalString,
    families: optionalString,
    publishers: optionalString,
  })
  .strict();
