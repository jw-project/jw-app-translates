import { I18n } from '../src/validator';

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
    save: 'Salvar',
    delete: 'Excluir',
    'go-back': 'Voltar para o início',
    'no-date': 'Sem data',
    'empty-state': {
      title: 'Adicione um novo item',
      description: 'Clique no botão abaixo para adicionar um novo item.',
      button: 'Novo',
    },
    errors: {
      'required-field': 'Esse é um campo obrigatório',
      'invalid-field-link': 'Link inválido',
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
    },
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
    'event-type': {
      CIRCUIT_OVERSEER: 'Superintendente de Circuito',
      CIRCUIT_ASSEMBLY: 'Assembleia de Circuito',
      CONVENTION: 'Convenção',
      MEMORIAL: 'Memorial',
      MEETING_DAY_CHANGE: 'Mudança de dia de reunião',
      NO_MEETING: 'Sem reunião',
      SERVICE_OVERSEER_VISIT: 'Visita do Superintendente de Serviço',
      OTHER: 'Outro',
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
      'midweek-meeting-time': 'Horário da reunião de meio de semana',
      'weekend-meeting-time': 'Horário da reunião de fim de semana',
      'online-meeting-subtitle': 'Reunião online',
      'online-meeting-software': 'Software de reunião online',
      'online-meeting-id': 'ID da reunião online',
      'online-meeting-dial-number': 'Número de discagem da reunião online',
      'online-meeting-password': 'Senha da reunião online',
      'online-meeting-link': 'Link da reunião online',
      'circuit-subtitle': 'Circuito',
      'circuit-name': 'Nome do circuito',
      'circuit-overseer-name': 'Superintendente de circuito',
      'circuit-overseer-contact': 'Contato do superintendente de circuito',
      errors: {
        'congregation-already-exists':
          'A congregação com esse número já existe',
      },
      events: {
        type: 'Tipo',
        name: 'Nome',
        description: 'Descrição',
        link: 'Link',
        start_date: 'Data de início',
        start_time: 'Horário de início',
        end_date: 'Data de término',
        end_time: 'Horário de término',
      },
    },
  },
};
