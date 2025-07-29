import { TBuilder } from '@/core';
import { MoneyGraphql, MoneyRest } from '@/models/commons';
import {
  DiscountedLineItemPortionGraphql,
  DiscountedLineItemPortionRest,
} from '../../../discounted-line-item-portion';
import { GraphqlModelBuilder, RestModelBuilder } from '../../builders';
import {
  TDiscountedLineItemPriceGraphql,
  TDiscountedLineItemPriceRest,
} from '../../types';

type TPresetParams = {
  currencyCode?: string;
  target?: string;
  discountId?: string;
};

const defaultParams = {
  currencyCode: 'EUR',
  target: 'lineItems',
  discountId: 'cart-discount-id',
};

export const restPreset = (
  params: TPresetParams = defaultParams
): TBuilder<TDiscountedLineItemPriceRest> => {
  const _params = {
    ...defaultParams,
    ...params,
  };
  return RestModelBuilder()
    .value(MoneyRest.presets.withCurrency(_params.currencyCode))
    .includedDiscounts([
      DiscountedLineItemPortionRest.presets.withAllFields({
        currencyCode: _params.currencyCode,
        discountId: _params.discountId,
      }),
    ]);
};

export const graphqlPreset = (
  params: TPresetParams = defaultParams
): TBuilder<TDiscountedLineItemPriceGraphql> => {
  const _params = {
    ...defaultParams,
    ...params,
  };
  return GraphqlModelBuilder()
    .value(MoneyGraphql.presets.withCurrency(_params.currencyCode))
    .includedDiscounts([
      DiscountedLineItemPortionGraphql.presets.withAllFields({
        currencyCode: _params.currencyCode,
        discountId: _params.discountId,
      }),
    ]);
};
