import type { TBuilder } from '@/core';
import { KeyReferenceDraft } from '@/models/commons';
import { ShippingRateDraftRest } from '../../../../shipping-rate/shipping-rate-draft';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from '../../builders';
import type {
  TZoneRateDraft,
  TZoneRateDraftGraphql,
  TZoneRateDraftRest,
} from '../../types';

// zone with key'e2e-us-zone' will always be set in the project under test
//{ "name": "e2e-us-zone", "key" : "e2e-us-zone", "locations": [{ "country": "US"} ]}

const populateUsZonePreset = <
  TModel extends TZoneRateDraftGraphql | TZoneRateDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder
    .zone(KeyReferenceDraft.presets.zone().key('e2e-us-zone'))
    .shippingRates([
      ShippingRateDraftRest.presets.changeHistoryData.withUsdCurrency(),
    ]);
};

export const restPreset = (): TBuilder<TZoneRateDraftRest> =>
  populateUsZonePreset(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TZoneRateDraftGraphql> =>
  populateUsZonePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<TZoneRateDraft> =>
  populateUsZonePreset(CompatModelBuilder());
