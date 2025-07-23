import { TBuilder } from '@/core';
import {
  CartDiscount,
  CartDiscountLineItemsTarget,
  CartDiscountValueRelative,
} from '@/models/cart/cart-discount';
import { Money, ReferenceRest } from '@/models/commons';
import { GraphqlModelBuilder, RestModelBuilder } from '../../builders';
import {
  TDiscountedLineItemPortionGraphql,
  TDiscountedLineItemPortionRest,
} from '../../types';

type TPresetParams = {
  currencyCode?: string;
  discountId?: string;
};

const defaultParams = {
  currencyCode: 'EUR',
  discountId: 'cart-discount-id',
};

export const restPreset = (
  params?: TPresetParams
): TBuilder<TDiscountedLineItemPortionRest> => {
  const _params = {
    ...defaultParams,
    ...params,
  };
  return RestModelBuilder()
    .discount(
      ReferenceRest.presets.cartDiscountReference().id(_params.discountId)
    )
    .discountedAmount(Money.presets.withCurrency(_params.currencyCode));
};

export const graphqlPreset = (
  params?: TPresetParams
): TBuilder<TDiscountedLineItemPortionGraphql> => {
  const _params = {
    ...defaultParams,
    ...params,
  };
  return GraphqlModelBuilder()
    .discount(
      CartDiscount.random()
        .id(_params.discountId)
        .value(CartDiscountValueRelative.random())
        .target(CartDiscountLineItemsTarget.random())
    )
    .discountedAmount(Money.presets.withCurrency(_params.currencyCode));
};
