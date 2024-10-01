import { I18n } from '~/validator';

export const ptBR: I18n = {
  menu: {
    categories: { congregation: 'Congregação', people: 'Pessoas' },
    congregation: 'Congregação',
    groups: 'Grupos',
    events: 'Eventos',
    informationsBoard: 'Quadro de Anúncios',
    families: 'Famílias',
    publishers: 'Publicadores',
  },
  common: {
    new: 'Novo',
    save: 'Salvar',
    edit: 'Editar',
    delete: 'Excluir',
    yes: 'Sim',
    no: 'Não',
    'go-back': 'Voltar para o início',
    'no-date': 'Sem data',
    'navegation-next-button': 'Próximo',
    'navegation-back-button': 'Anterior',
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
    'informationBoard-type': {
      ACCOUNTS: 'Contas',
      DESIGNATIONS: 'Disgnações',
      INFORMATION: 'Informações',
      TERRITORY: 'Territórios',
      WITNESSING: 'Testemunho',
      OTHERS: 'Outros',
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
        'delete-modal': 'Tem certeza que deseja excluir esse evento?',
        'delete-modal_plural': 'Tem certeza que deseja excluir esses eventos?',
        table: {
          event: 'Evento',
          date: 'Data',
          actions: 'Ações',
        },
        form: {
          type: 'Tipo',
          name: 'Nome',
          description: 'Descrição',
          link: 'Link',
          'start-date': 'Data de início',
          'start-time': 'Horário de início',
          'end-date': 'Data de término',
          'end-time': 'Horário de término',
          errors: {
            'end-date-before-start-date':
              'A data de término não pode ser antes da data de início',
          },
        },
      },
      informationsBoard: {
        'delete-modal': 'Tem certeza que deseja excluir esse anúncio?',
        'delete-modal_plural': 'Tem certeza que deseja excluir esses anúncios?',
        table: {
          informationBoard: 'Quadro de Anúncio',
          date: 'Data',
          actions: 'Ações',
        },
        form: {
          type: 'Tipo',
          title: 'Título',
          description: 'Descrição',
          link: 'Link',
          'start-date': 'Data de início',
          'end-date': 'Data de término',
          errors: {
            'end-date-before-start-date':
              'A data de término não pode ser antes da data de início',
          },
        },
      },
    },
    people: {
      publishers: {
        table: {
          name: 'Nome',
          surname: 'Sobrenome',
        },
        tabs: {
          information: 'Informação',
          spiritual: 'Espiritual',
          assign: 'Designações',
          records: 'Registros',
          emergency: 'Emergência',
        },
        'information-form': {
          name: 'Nome',
          surname: 'Sobrenome',
        },
        'spiritual-form': {
          baptism: 'Data do batismo',
          auxiliary: 'Pioneiro auxiliar',
          regular: 'Pioneiro regular',
          elder: 'Ancião',
          servant: 'Servo ministerial',
          'last-report': 'Último relatório',
        },
        'assign-form': {},
        'records-grid': {
          year: 'Ano de Serviço',
          'month-indicative': 'Mês',
          shared: 'Participou no ministério',
          studies: 'Estudos bíblicos',
          'auxiliary-pioneer': 'Pioneiro auxiliar',
          hours: 'Horas',
          'hours-optional-info': 'Se pioneiro ou missionário em campo',
          credits: 'Créditos',
          late: 'Atrasado',
          remarks: 'Observações',
        },
        'emergency-form': {},
      },
    },
  },
};
