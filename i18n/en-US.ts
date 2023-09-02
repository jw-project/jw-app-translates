import { I18n } from '../src/valitator';

export const enUS: I18n = {
  menu: {
    categories: { congregation: 'Congregation', people: 'People' },
    congregation: 'Congregation',
    groups: 'Groups',
    events: 'Events',
    families: 'Families',
    publishers: 'Publishers',
  },
  common: {
    save: 'Save',
    'go-back': 'Go back to the beginning',
    'empty-state': {},
    errors: {
      'required-field': 'This is a required field',
      'invalid-field': 'Invalid value',
      'error-title': 'Oops!',
      'bad-request': 'Invalid request',
      '400-description':
        'There was an error that prevented this page from showing.',
      'unauthorized-request': 'Unauthorized',
      '401-description': 'Unfortunately you do not have access to the page.',
      'forbidden-request': 'Forbidden',
      '403-description': 'Unfortunately you do not have access to the page.',
      'not-found-request': 'Not found',
      '404-description': 'The page you are looking for does not exist.',
    },
  },
  enum: {
    week: {
      MONDAY: 'Monday',
      TUESDAY: 'Tuesday',
      WEDNESDAY: 'Wednesday',
      THURSDAY: 'Thursday',
      FRIDAY: 'Friday',
      SATURDAY: 'Saturday',
      SUNDAY: 'Sunday',
    },
    'event-type': {},
  },
  routes: {
    index: {
      welcome: 'Welcome to Admin',
      'login-not-found': 'The login used was not found in any congregation.',
      'include-email-in-profile':
        'If you want to log into an existing congregation, ask the congregation administrator to include the email address {email} in your publisher profile.',
      'refresh-page': 'After that, refresh the page.',
      'reload-button': 'Reload',
      'new-congregation-text':
        'Or if you want to be the administrator of a new congregation, you can register on the Congregation page.',
      'access-congregation-button': 'Create new congregation',
    },
    login: {
      wait: 'Wait...',
      description: 'We are validating your login, this may take a few seconds.',
    },
    congregation: {
      id: 'Congregation id',
      name: 'Congregation name',
      number: 'Congregation number',
      address: 'Congregation address',
      'midweek-meeting-day': 'Midweek meeting day',
      'weekend-meeting-day': 'Weekend meeting day',
      errors: {
        'congregation-already-exists':
          'The congregation with that number already exists',
      },
      events: {},
    },
  },
};
