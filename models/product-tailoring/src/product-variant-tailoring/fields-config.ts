import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';

import type {
  TProductVariantTailoringGraphql,
  TProductVariantTailoringRest,
} from './types';

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  images: [],
  assets: [],
};

export const restFieldsConfig: TModelFieldsConfig<TProductVariantTailoringRest> =
  {
    fields: {
      ...commonFieldsConfig,
      attributes: [],
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TProductVariantTailoringGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'ProductVariantTailoring',
      attributesRaw: [],
    },
  };
