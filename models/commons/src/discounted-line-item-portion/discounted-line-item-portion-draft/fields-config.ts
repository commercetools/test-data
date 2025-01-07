import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import { MoneyDraft, Reference } from '../../index';
import type {
  TDiscountedLineItemPortionDraftGraphql,
  TDiscountedLineItemPortionDraftRest,
} from '../types';

const commonFieldsConfig = {
  discount: fake(() => Reference.presets.cartDiscountReference()),
  discountedAmount: fake(() => MoneyDraft.random()),
};

export const restFieldsConfig: TModelFieldsConfig<TDiscountedLineItemPortionDraftRest> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TDiscountedLineItemPortionDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };
