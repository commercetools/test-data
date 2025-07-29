import { fake, type TModelFieldsConfig } from '@/core';
import type { TMethodTaxedPriceGraphql, TMethodTaxedPriceRest } from './types';

const commonFieldsConfig = {
  shippingMethodKey: fake((f) => f.lorem.slug(2)),
  taxedPrice: null,
};

export const restFieldsConfig: TModelFieldsConfig<TMethodTaxedPriceRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TMethodTaxedPriceGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'MethodTaxedPrice',
    },
  };
