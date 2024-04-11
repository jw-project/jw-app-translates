import { z } from 'zod';

import { commonValidator } from './validators/common';
import { enumsValidator } from './validators/enums';
import { menuValidator } from './validators/menu';
import { routesValidator } from './validators/routes';

export const schema = z
  .object({
    menu: menuValidator,
    common: commonValidator,
    enum: enumsValidator,
    routes: routesValidator,
  })
  .strict();

export type I18n = z.infer<typeof schema>;
