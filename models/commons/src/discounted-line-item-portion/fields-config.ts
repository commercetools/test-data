import { CartDiscount } from '@commercetools-test-data/cart-discount';
import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import { Money, Reference, TReferenceGraphql } from '../index';
import type {
  TDiscountedLineItemPortionGraphql,
  TDiscountedLineItemPortionRest,
} from './types';

const commonFieldsConfig = {
  discountedAmount: fake(() => Money.random()),
};

export const restFieldsConfig: TModelFieldsConfig<TDiscountedLineItemPortionRest> =
  {
    fields: {
      discount: fake(() => Reference.presets.cartDiscountReference()),
      ...commonFieldsConfig,
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TDiscountedLineItemPortionGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      discount: fake(() => CartDiscount.random()),
      discountRef: null,
      __typename: 'DiscountedLineItemPortion',
    },
    postBuild: (model) => {
      return {
        discountRef: model.discount
          ? Reference.presets
              .cartDiscountReference()
              .id(model.discount.id)
              .buildGraphql<TReferenceGraphql<'cart-discount'>>()
          : undefined,
      };
    },
  };
