import { z } from 'zod';

import { optionalString } from '../consts';
import { eventsValidator } from './congregation/events';
import { informationsBoardValidator } from './congregation/informations-board';

export const congregationValidator = z
  .object({
    id: optionalString,
    name: optionalString,
    number: optionalString,
    address: optionalString,
    'midweek-meeting-day': optionalString,
    'weekend-meeting-day': optionalString,
    'midweek-meeting-time': optionalString,
    'weekend-meeting-time': optionalString,
    'online-meeting-subtitle': optionalString,
    'online-meeting-software': optionalString,
    'online-meeting-id': optionalString,
    'online-meeting-dial-number': optionalString,
    'online-meeting-password': optionalString,
    'online-meeting-link': optionalString,
    'circuit-subtitle': optionalString,
    'circuit-name': optionalString,
    'circuit-overseer-name': optionalString,
    'circuit-overseer-contact': optionalString,
    errors: z.object({
      'congregation-already-exists': optionalString,
    }),
    events: eventsValidator,
    'informations-board': informationsBoardValidator,
  })
  .strict();
