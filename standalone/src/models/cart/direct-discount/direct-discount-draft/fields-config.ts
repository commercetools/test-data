import { fake, type TModelFieldsConfig } from '@/core';
import { CartDiscountValueRelativeDraft } from '@/models/cart-discount';
import type {
  TDirectDiscountDraftGraphql,
  TDirectDiscountDraftRest,
} from '../types';

const commonFieldsConfig = {
  value: fake(() => CartDiscountValueRelativeDraft.random()),
  target: null,
};

export const restFieldsConfig: TModelFieldsConfig<TDirectDiscountDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TDirectDiscountDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };
