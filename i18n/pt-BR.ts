import { I18n } from '../src/valitator';

export const ptBR: I18n = {
  menu: {
    categories: { congregation: 'Congregação', people: 'Pessoas' },
    congregation: 'Congregação',
    groups: 'Grupos',
    events: 'Eventos',
    families: 'Famílias',
    publishers: 'Publicadores',
  },
  common: {
    'saved-success': 'Salvo',
    'required-field': 'Esse é um campo obrigatório',
    'invalid-field': 'Valor inválido',
    'error-title': 'Ah não!',
    'bad-request': 'Requisição inválida',
    '400-description':
      'Houve um erro que impediu que essa página fosse exibida.',
    'unauthorized-request': 'Não autorizado',
    '401-description': 'Infelizmente você não tem acesso à página.',
    'forbidden-request': 'Acesso negado',
    '403-description': 'Infelizmente você não tem acesso à página.',
    'not-found-request': 'Não encontrado',
    '404-description': 'A página que você está procurando não existe.',
    save: 'Salvar',
    'go-back': 'Voltar para o início',
  },
  enum: {
    week: {
      MONDAY: 'Segunda-feira',
      TUESDAY: 'Terça-feira',
      WEDNESDAY: 'Quarta-feira',
      THURSDAY: 'Quinta-feira',
      FRIDAY: 'Sexta-feira',
      SATURDAY: 'Sábado',
      SUNDAY: 'Domingo',
    },
  },
  routes: {
    index: {
      welcome: 'Bem-vindo ao Admin',
      'login-not-found':
        'O login utilizado não foi encontrado em nenhuma congregação.',
      'include-email-in-profile':
        'Caso você queira logar em uma congregação já existente, peça ao administrador da congregação que inclua o email *{email}* no seu perfil de publicador.',
      'refresh-page': 'Após isso, atualize a página.',
      'reload-button': 'Atualizar',
      'new-congregation-text':
        'Ou se você quer ser o administrador de uma nova congregação, você pode fazer esse cadastro na página de *Congregação*.',
      'access-congregation-button': 'Criar nova congregação',
    },
    login: {
      wait: 'Aguarde...',
      description:
        'Estamos validando o seu login, isso pode levar uns segundos.',
    },
    congregation: {
      id: 'ID da congregação',
      name: 'Nome da congregação',
      number: 'Número da congregação',
      address: 'Endereço da congregação',
      'midweek-meeting-day': 'Dia da reunião de meio de semana',
      'weekend-meeting-day': 'Dia da reunião de fim de semana',
      'congregation-already-exists': 'A congregação com esse número já existe',
    },
  },
};