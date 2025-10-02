import type { TBuilder } from '@/core';
import { MoneyDraftRest } from '@/models/commons';
import {
  ShippingRateDraftRest,
  ShippingRateDraftGraphql,
  ShippingRateDraft,
} from '../../index';
import type {
  TShippingRateDraftRest,
  TShippingRateDraftGraphql,
} from '../../types';

const populatePreset = <
  TModel extends TShippingRateDraftRest | TShippingRateDraftGraphql,
>(
  builder: TBuilder<TModel>
) => {
  return builder
    .tiers([])
    .price(MoneyDraftRest.presets.changeHistoryData.withUsdCurrencyCode())
    .freeAbove(MoneyDraftRest.presets.changeHistoryData.withUsdCurrencyCode());
};

export const restPreset = (): TBuilder<TShippingRateDraftRest> =>
  populatePreset(ShippingRateDraftRest.random());

export const graphqlPreset = (): TBuilder<TShippingRateDraftGraphql> =>
  populatePreset(ShippingRateDraftGraphql.random());

export const compatPreset = (): TBuilder<TShippingRateDraftRest> =>
  populatePreset(ShippingRateDraft.random());
