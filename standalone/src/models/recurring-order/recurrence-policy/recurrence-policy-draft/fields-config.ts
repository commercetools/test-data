import { fake, type TModelFieldsConfig } from '@/core';
import type {
  TRecurrencePolicyDraftGraphql,
  TRecurrencePolicyDraftRest,
} from '../types';

const commonFieldsConfig = {
  key: fake((f) => f.string.uuid()),
  name: null,
  description: null,
  schedule: null,
};

export const restFieldsConfig: TModelFieldsConfig<TRecurrencePolicyDraftRest> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TRecurrencePolicyDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };
