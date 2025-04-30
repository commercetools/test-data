import { CartDiscount } from '@commercetools-test-data/cart-discount';
import {
  Money,
  ReferenceGraphql,
  ReferenceRest,
} from '@commercetools-test-data/commons';
import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import type {
  TDiscountedLineItemPortionGraphql,
  TDiscountedLineItemPortionRest,
} from './types';

export const restFieldsConfig: TModelFieldsConfig<TDiscountedLineItemPortionRest> =
  {
    fields: {
      discount: fake(() => ReferenceRest.presets.cartDiscountReference()),
      discountedAmount: fake(() => Money.random()),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TDiscountedLineItemPortionGraphql> =
  {
    fields: {
      discount: fake(() => CartDiscount.random()),
      discountedAmount: fake(() => Money.random()),
      discountRef: null,
      __typename: 'DiscountedLineItemPortion',
    },
    postBuild: (model) => {
      const discountRef = model.discount
        ? ReferenceGraphql.presets
            .cartDiscountReference()
            .id(model.discount.id)
            .buildGraphql()
        : undefined;

      return {
        discountRef,
      };
    },
  };
