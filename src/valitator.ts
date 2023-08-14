import { z } from 'zod';

export const schema = z.object({
  menu: z.object({
    categories: z.object({ congregation: z.string(), people: z.string() }),
    congregation: z.string(),
    groups: z.string(),
    events: z.string(),
    families: z.string(),
    publishers: z.string(),
  }),
  common: z.object({
    'saved-success': z.string(),
    'required-field': z.string(),
    'invalid-field': z.string(),
    'error-title': z.string(),
    'bad-request': z.string(),
    '400-description': z.string(),
    'unauthorized-request': z.string(),
    '401-description': z.string(),
    'forbidden-request': z.string(),
    '403-description': z.string(),
    'not-found-request': z.string(),
    '404-description': z.string(),
    save: z.string(),
    'go-back': z.string(),
  }),
  enum: z.object({
    week: z.object({
      MONDAY: z.string(),
      TUESDAY: z.string(),
      WEDNESDAY: z.string(),
      THURSDAY: z.string(),
      FRIDAY: z.string(),
      SATURDAY: z.string(),
      SUNDAY: z.string(),
    }),
  }),
  routes: z.object({
    index: z.object({
      welcome: z.string(),
      'login-not-found': z.string(),
      'include-email-in-profile': z.string(),
      'refresh-page': z.string(),
      'reload-button': z.string(),
      'new-congregation-text': z.string(),
      'access-congregation-button': z.string(),
    }),
    login: z.object({ wait: z.string(), description: z.string() }),
    congregation: z.object({
      id: z.string(),
      name: z.string(),
      number: z.string(),
      address: z.string(),
      'midweek-meeting-day': z.string(),
      'weekend-meeting-day': z.string(),
      'congregation-already-exists': z.string(),
    }),
  }),
});

export type I18n = z.infer<typeof schema>;
