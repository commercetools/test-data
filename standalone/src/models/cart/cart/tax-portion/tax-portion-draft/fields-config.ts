import { fake, type TModelFieldsConfig } from '@/core';
import { Money } from '@/models/commons';
import type { TTaxPortionDraftGraphql, TTaxPortionDraftRest } from '../types';

const commonFieldsConfig = {
  rate: fake((f) => f.number.float({ min: 0, max: 1 })),
  amount: fake(() => Money.random()),
  name: null,
};

export const restFieldsConfig: TModelFieldsConfig<TTaxPortionDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TTaxPortionDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };
