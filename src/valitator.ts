import { z } from 'zod';

const optionalString = z.string().optional();

export const schema = z
  .object({
    menu: z
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
        families: optionalString,
        publishers: optionalString,
      })
      .strict(),
    common: z
      .object({
        save: optionalString,
        'go-back': optionalString,
        errors: z.object({
          'required-field': optionalString,
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
        }),
      })
      .strict(),
    enum: z
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
        event: z
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
      })
      .strict(),
    routes: z
      .object({
        index: z
          .object({
            welcome: optionalString,
            'login-not-found': optionalString,
            'include-email-in-profile': optionalString,
            'refresh-page': optionalString,
            'reload-button': optionalString,
            'new-congregation-text': optionalString,
            'access-congregation-button': optionalString,
          })
          .strict(),
        login: z
          .object({
            wait: optionalString,
            description: optionalString,
          })
          .strict(),
        congregation: z
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
          })
          .strict(),
        events: z
          .object({
            type: optionalString,
            name: optionalString,
            description: optionalString,
            link: optionalString,
            start_date: optionalString,
            start_time: optionalString,
            end_date: optionalString,
            end_time: optionalString,
          })
          .strict(),
      })
      .strict(),
  })
  .strict();

export type I18n = z.infer<typeof schema>;
