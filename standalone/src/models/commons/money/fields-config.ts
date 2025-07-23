import { fake, oneOf, type TModelFieldsConfig } from '@/core';
import type { TMoneyRest, TMoneyGraphql } from './types';

const commonFieldsConfig = {
  centAmount: fake((f) => f.number.int({ min: 10, max: 10000 })),
  currencyCode: oneOf('EUR', 'USD'),
};

// readonly centAmount: number;
// readonly currencyCode: string;
export const restFieldsConfig: TModelFieldsConfig<TMoneyRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

// __typename?: 'Money';
// centAmount: Scalars['Long']['output'];
// currencyCode: Scalars['Currency']['output'];
// fractionDigits: Scalars['Int']['output'];
// type: Scalars['String']['output'];
export const graphqlFieldsConfig: TModelFieldsConfig<TMoneyGraphql> = {
  fields: {
    ...commonFieldsConfig,
    type: 'centPrecision',
    fractionDigits: 2,
    __typename: 'Money',
  },
};
