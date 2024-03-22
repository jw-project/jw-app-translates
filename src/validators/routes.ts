import { z } from 'zod';

import { congregationValidator } from './routes/congregation';
import { indexValidator } from './routes/index';
import { loginValidator } from './routes/login';
import { publisherValidator } from './routes/people/publisher';

export const routesValidator = z
  .object({
    index: indexValidator,
    login: loginValidator,
    congregation: congregationValidator,
    people: publisherValidator,
  })
  .strict();
