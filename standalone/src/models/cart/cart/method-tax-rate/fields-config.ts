import { fake, type TModelFieldsConfig } from '@/core';
import type { TMethodTaxRateGraphql, TMethodTaxRateRest } from './types';

const commonFieldsConfig = {
  shippingMethodKey: fake((f) => f.lorem.slug(2)),
  taxRate: null,
};

export const restFieldsConfig: TModelFieldsConfig<TMethodTaxRateRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TMethodTaxRateGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'MethodTaxRate',
  },
};
