import { z } from 'zod';

import { optionalString } from '../consts';

export const loginValidator = z
  .object({
    wait: optionalString,
    description: optionalString,
  })
  .strict();
