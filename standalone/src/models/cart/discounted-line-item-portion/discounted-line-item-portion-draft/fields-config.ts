import { fake, type TModelFieldsConfig } from '../../../../core';
import {
  MoneyDraft,
  ReferenceGraphql,
  ReferenceRest,
} from '../../../commons';
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
