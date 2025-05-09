import { fake, type TModelFieldsConfig } from '../../../core';
import { CartDiscount } from '../../cart-discount';
import {
  Money,
  ReferenceGraphql,
  ReferenceRest,
} from '../../commons';
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
