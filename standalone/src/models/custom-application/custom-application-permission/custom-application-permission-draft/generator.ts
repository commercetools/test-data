import upperFirst from 'lodash/upperFirst';
import { Generator, fake } from '../../../../core';
import { supportedViewOAuthScopes } from '../custom-application-permission/constants';
import type { TCustomApplicationPermissionDraft } from './types';

const generator = Generator<TCustomApplicationPermissionDraft>({
  fields: {
    name: fake((f) => `view${upperFirst(f.lorem.word())}`),
    oAuthScopes: fake((f) =>
      f.helpers.arrayElements(supportedViewOAuthScopes, 2)
    ),
  },
});

export default generator;
