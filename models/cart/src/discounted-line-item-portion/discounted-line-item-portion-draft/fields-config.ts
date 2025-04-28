import {
  MoneyDraft,
  ReferenceGraphql,
  ReferenceRest,
} from '@commercetools-test-data/commons';
import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import type {
  TDiscountedLineItemPortionDraftGraphql,
  TDiscountedLineItemPortionDraftRest,
} from '../types';

export const restFieldsConfig: TModelFieldsConfig<TDiscountedLineItemPortionDraftRest> =
  {
    fields: {
      discount: fake(() => ReferenceRest.presets.cartDiscountReference()),
      discountedAmount: fake(() => MoneyDraft.random()),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TDiscountedLineItemPortionDraftGraphql> =
  {
    fields: {
      discount: fake(() => ReferenceGraphql.presets.cartDiscountReference()),
      discountedAmount: fake(() => MoneyDraft.random()),
    },
  };
