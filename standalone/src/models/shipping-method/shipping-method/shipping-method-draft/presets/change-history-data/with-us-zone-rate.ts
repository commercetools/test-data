import type { TBuilder } from '@/core';
import type {
  TZoneRateDraft,
  TZoneRateDraftGraphql,
  TZoneRateDraftRest,
} from '@/models/shipping-method/zone-rate';
import {
  ZoneRateDraft,
  ZoneRateDraftGraphql,
  ZoneRateDraftRest,
} from '../../../../zone-rate/zone-rate-draft';
import type {
  TShippingMethodDraft,
  TShippingMethodDraftGraphql,
  TShippingMethodDraftRest,
} from '../../../types';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from '../../builders';

//default(false) as more than one default method will lead to an error

const populatePreset = <
  TModel extends
    | TShippingMethodDraftGraphql
    | TShippingMethodDraftRest
    | TShippingMethodDraft,
>(
  builder: TBuilder<TModel>,
  zoneRateBuilder: TBuilder<
    TZoneRateDraftGraphql | TZoneRateDraftRest | TZoneRateDraft
  >
) => {
  return builder
    .taxCategory(null!)
    .zoneRates([zoneRateBuilder])
    .isDefault(false);
};

export const restPreset = (): TBuilder<TShippingMethodDraftRest> =>
  populatePreset(
    RestModelBuilder(),
    ZoneRateDraftRest.presets.changeHistoryData.usZone()
  );

export const graphqlPreset = (): TBuilder<TShippingMethodDraftGraphql> =>
  populatePreset(
    GraphqlModelBuilder(),
    ZoneRateDraftGraphql.presets.changeHistoryData.usZone()
  );

export const compatPreset = (): TBuilder<TShippingMethodDraft> =>
  populatePreset(
    CompatModelBuilder(),
    ZoneRateDraft.presets.changeHistoryData.usZone()
  );
