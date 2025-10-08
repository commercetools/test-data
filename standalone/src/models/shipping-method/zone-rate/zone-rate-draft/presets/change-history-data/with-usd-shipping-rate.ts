import type { TBuilder } from '@/core';
import { KeyReferenceDraft } from '@/models/commons';
import {
  ShippingRateDraftRest,
  ShippingRateDraftGraphql,
  ShippingRateDraft,
} from '../../../../shipping-rate/shipping-rate-draft';
import type {
  TShippingRateDraftRest,
  TShippingRateDraftGraphql,
  TShippingRateDraft,
} from '../../../../shipping-rate/types';
import type {
  TZoneRateDraft,
  TZoneRateDraftGraphql,
  TZoneRateDraftRest,
} from '../../../types';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from '../../builders';

// zone with key 'e2e-us-zone' will always be set in the project under test
// { "name": "e2e-us-zone", "key" : "e2e-us-zone", "locations": [{ "country": "US"} ]}

const populatePreset = <
  TModel extends TZoneRateDraftGraphql | TZoneRateDraftRest | TZoneRateDraft,
>(
  builder: TBuilder<TModel>,
  shippingRateBuilder: TBuilder<
    TShippingRateDraftGraphql | TShippingRateDraftRest | TShippingRateDraft
  >
) => {
  return builder
    .zone(KeyReferenceDraft.presets.zone().key('e2e-us-zone'))
    .shippingRates([shippingRateBuilder]);
};

export const restPreset = (): TBuilder<TZoneRateDraftRest> =>
  populatePreset(
    RestModelBuilder(),
    ShippingRateDraftRest.presets.changeHistoryData.withUsdCurrency()
  );

export const graphqlPreset = (): TBuilder<TZoneRateDraftGraphql> =>
  populatePreset(
    GraphqlModelBuilder(),
    ShippingRateDraftGraphql.presets.changeHistoryData.withUsdCurrency()
  );

export const compatPreset = (): TBuilder<TZoneRateDraft> =>
  populatePreset(
    CompatModelBuilder(),
    ShippingRateDraft.presets.changeHistoryData.withUsdCurrency()
  );
