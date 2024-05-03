import { z } from 'zod';

import { optionalString } from './consts';

export const enumsValidator = z
  .object({
    week: z
      .object({
        MONDAY: optionalString,
        TUESDAY: optionalString,
        WEDNESDAY: optionalString,
        THURSDAY: optionalString,
        FRIDAY: optionalString,
        SATURDAY: optionalString,
        SUNDAY: optionalString,
      })
      .strict(),
    'event-type': z
      .object({
        CIRCUIT_OVERSEER: optionalString,
        CIRCUIT_ASSEMBLY: optionalString,
        CONVENTION: optionalString,
        MEMORIAL: optionalString,
        MEETING_DAY_CHANGE: optionalString,
        NO_MEETING: optionalString,
        SERVICE_OVERSEER_VISIT: optionalString,
        OTHER: optionalString,
      })
      .strict(),
    'informationBoard-type': z
      .object({
        ACCOUNTS: optionalString,
        DESIGNATIONS: optionalString,
        INFORMATION: optionalString,
        TERRITORY: optionalString,
        WITNESSING: optionalString,
        OTHERS: optionalString,
      })
      .strict(),
  })
  .strict();
