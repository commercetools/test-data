import { CartDiscountValueRelativeDraft } from '@commercetools-test-data/cart-discount';
import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
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
