import { fake, type TModelFieldsConfig } from '../../../../core';
import { supportedViewOAuthScopes } from '../constants';
import type { TCustomApplicationPermissionDraftGraphql } from './types';

export const graphqlFieldsConfig: TModelFieldsConfig<TCustomApplicationPermissionDraftGraphql> =
  {
    fields: {
      name: fake((f) => f.lorem.words(1)),
      oAuthScopes: fake((f) =>
        f.helpers.arrayElements(supportedViewOAuthScopes, 2)
      ),
    },
  };
