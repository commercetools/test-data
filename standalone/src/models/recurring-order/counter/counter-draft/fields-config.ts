import { fake, type TModelFieldsConfig } from '@/core';
import type { TCounterDraftGraphql } from '../types';

export const graphqlFieldsConfig: TModelFieldsConfig<TCounterDraftGraphql> = {
  fields: {
    totalToSkip: fake((f) => f.number.int({ min: 1, max: 10 })),
  },
};
