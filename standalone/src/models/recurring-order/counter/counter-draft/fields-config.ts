import { fake, type TModelFieldsConfig } from '@/core';
import type { TCounterDraftGraphql, TCounterDraftRest } from '../types';

export const restFieldsConfig: TModelFieldsConfig<TCounterDraftRest> = {
  fields: {
    type: 'counter',
    totalToSkip: fake((f) => f.number.int({ min: 1, max: 10 })),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TCounterDraftGraphql> = {
  fields: {
    totalToSkip: fake((f) => f.number.int({ min: 1, max: 10 })),
  },
};
