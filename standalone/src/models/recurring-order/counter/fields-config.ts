import { fake, type TModelFieldsConfig } from '@/core';
import type { TCounterGraphql, TCounterRest } from './types';

const commonFieldsConfig = {
  type: 'counter',
  totalToSkip: fake((f) => f.number.int({ min: 1, max: 10 })),
  skipped: fake((f) => f.number.int({ min: 0, max: 10 })),
  lastSkippedAt: null,
};

export const restFieldsConfig: TModelFieldsConfig<TCounterRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TCounterGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'Counter',
  },
};
