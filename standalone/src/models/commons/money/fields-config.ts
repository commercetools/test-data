import { fake, oneOf, type TModelFieldsConfig } from '@/core';
import type { TMoneyRest, TMoneyGraphql } from './types';

const commonFieldsConfig = {
  centAmount: fake((f) => f.number.int({ min: 10, max: 10000 })),
  currencyCode: oneOf('EUR', 'USD'),
};

export const restFieldsConfig: TModelFieldsConfig<TMoneyRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TMoneyGraphql> = {
  fields: {
    ...commonFieldsConfig,
    type: 'centPrecision',
    fractionDigits: 2,
    __typename: 'Money',
  },
};
