import { fake, type TModelFieldsConfig } from '@/core';
import { CartDiscount } from '@/models/cart/cart-discount';
import { Money, ReferenceGraphql, ReferenceRest } from '@/models/commons';
import type {
  TDiscountedTotalPricePortionGraphql,
  TDiscountedTotalPricePortionRest,
} from './types';

export const restFieldsConfig: TModelFieldsConfig<TDiscountedTotalPricePortionRest> =
  {
    fields: {
      discount: fake(() => ReferenceRest.presets.cartDiscountReference()),
      discountedAmount: fake(() => Money.random()),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TDiscountedTotalPricePortionGraphql> =
  {
    fields: {
      discount: fake(() => CartDiscount.random()),
      discountedAmount: fake(() => Money.random()),
      discountRef: null,
      __typename: 'DiscountedTotalPricePortion',
    },
    postBuild: (model) => {
      const discountRef = model.discount
        ? ReferenceGraphql.presets
            .cartDiscountReference()
            .id(model.discount.id)
            .buildGraphql()
        : ReferenceGraphql.presets.cartDiscountReference().buildGraphql();

      return {
        ...model,
        discountRef,
      };
    },
  };
