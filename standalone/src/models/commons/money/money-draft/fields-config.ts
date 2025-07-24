import { fake, oneOf, type TModelFieldsConfig } from '@/core';
import type { TMoneyDraftRest, TMoneyDraftGraphql } from '../types';

const commonFieldsConfig = {
  centAmount: fake((f) => f.number.int({ min: 10, max: 10000 })),
  currencyCode: oneOf('EUR', 'USD'),
};

export const restFieldsConfig: TModelFieldsConfig<TMoneyDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TMoneyDraftGraphql> = {
  fields: {
    ...commonFieldsConfig,
  },
};
