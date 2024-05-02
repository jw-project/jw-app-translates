import { z } from 'zod';

import { optionalString } from '../../../validators/consts';

export const recordsGridValidator = z
  .object({
    year: optionalString,
    shared: optionalString,
    studies: optionalString,
    'auxiliary-pioneer': optionalString,
    hours: optionalString,
    'hours-optional-info': optionalString,
    credits: optionalString,
    late: optionalString,
    remarks: optionalString,
  })
  .strict();
