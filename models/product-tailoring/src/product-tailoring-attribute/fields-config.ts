import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';

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
