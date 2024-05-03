import { I18n } from '~/validator';

export const esMX: I18n = {
  menu: {
    categories: { congregation: 'Congregación', people: 'Personas' },
    congregation: 'Congregación',
    groups: 'Grupos',
    events: 'Eventos',
    informationsBoard: 'Quadro de Anuncios',
    families: 'Familias',
    publishers: 'Publicadores',
  },
  common: {
    save: 'Guardar',
    'go-back': 'Volver al inicio',
    'empty-state': {},
    errors: {
      'required-field': 'Este es un campo obligatorio',
      'invalid-field': 'Valor inválido',
      'error-title': '¡Oh no!',
      'bad-request': 'Solicitud inválida',
      '400-description':
        'Hubo un error que impidió que esta página se mostrara.',
      'unauthorized-request': 'No autorizado',
      '401-description': 'Desafortunadamente, no tienes acceso a la página.',
      'forbidden-request': 'Acceso denegado',
      '403-description': 'Desafortunadamente, no tienes acceso a la página.',
      'not-found-request': 'No encontrado',
      '404-description': 'La página que estás buscando no existe.',
    },
  },
  enum: {
    week: {
      MONDAY: 'Lunes',
      TUESDAY: 'Martes',
      WEDNESDAY: 'Miércoles',
      THURSDAY: 'Jueves',
      FRIDAY: 'Viernes',
      SATURDAY: 'Sábado',
      SUNDAY: 'Domingo',
    },
    'event-type': {},
    'informationBoard-type': {},
  },
  routes: {
    index: {
      welcome: 'Bienvenido al Admin',
      'login-not-found':
        'El inicio de sesión utilizado no se encontró en ninguna congregación.',
      'include-email-in-profile':
        'Si desea iniciar sesión en una congregación existente, solicite al administrador de la congregación que incluya el correo electrónico *{email}* en su perfil de publicador.',
      'refresh-page': 'Después de eso, actualice la página.',
      'reload-button': 'Actualizar',
      'new-congregation-text':
        'O si desea ser el administrador de una nueva congregación, puede hacer este registro en la página de *Congregación*.',
      'access-congregation-button': 'Crear nueva congregación',
    },
    login: {
      wait: 'Espere...',
      description:
        'Estamos validando su inicio de sesión, esto puede llevar unos segundos.',
    },
    congregation: {
      id: 'ID de la congregación',
      name: 'Nombre de la congregación',
      number: 'Número de la congregación',
      address: 'Dirección de la congregación',
      'midweek-meeting-day': 'Día de la reunión a mitad de semana',
      'weekend-meeting-day': 'Día de la reunión del fin de semana',
      errors: {
        'congregation-already-exists':
          'La congregación con ese número ya existe',
      },
      events: {
        table: {},
        form: {
          errors: {},
        },
      },
      informationsBoard: {
        table: {},
        form: {
          errors: {},
        },
      },
    },
    people: {
      publishers: {
        table: {},
        tabs: {},
        'information-form': {},
        'spiritual-form': {},
        'assign-form': {},
        'records-grid': {},
        'emergency-form': {},
      },
    },
  },
};
