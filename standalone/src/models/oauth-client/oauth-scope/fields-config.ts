import { fake, type TModelFieldsConfig } from '@/core';
import { scopes } from './constants';
import type { TOAuthScopeGraphql } from './types';

export const graphqlFieldsConfig: TModelFieldsConfig<TOAuthScopeGraphql> = {
  fields: {
    name: fake((f) => f.helpers.arrayElement(Object.values(scopes))),
    __typename: 'SupportedOAuthScopeForOAuthClient',
  },
};
