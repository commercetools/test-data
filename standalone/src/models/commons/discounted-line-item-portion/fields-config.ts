// import { CartDiscount } from '../../cart-discount';
import { fake, type TModelFieldsConfig } from '../../../core';
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
      discount: null,
      discountRef: fake(() => Reference.presets.cartDiscountReference()),
      __typename: 'DiscountedLineItemPortion',
    },
    postBuild: (model) => {
      return {
        discountRef: model.discount
          ? Reference.presets
              .cartDiscountReference()
              .id(model.discount.id)
              .buildGraphql<TReferenceGraphql<'cart-discount'>>()
          : model.discountRef,
      };
    },
  };
