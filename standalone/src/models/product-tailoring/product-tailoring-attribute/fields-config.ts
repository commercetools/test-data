import { fake, type TModelFieldsConfig } from '@/core';
import { LocalizedString } from '@/models/commons';

import type {
  TProductTailoringAttributeGraphql,
  TProductTailoringAttributeRest,
} from './types';

const commonFieldsConfig = {
  name: fake((f) => f.lorem.words(2)),
};

export const restFieldsConfig: TModelFieldsConfig<TProductTailoringAttributeRest> =
  {
    fields: {
      ...commonFieldsConfig,
      value: fake(() => LocalizedString.random()),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TProductTailoringAttributeGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'ProductTailoringAttribute',
      value: fake(() => '{}'),
      referencedResourceSet: [],
      attributeDefinition: null,
      referencedResource: null,
    },
  };
