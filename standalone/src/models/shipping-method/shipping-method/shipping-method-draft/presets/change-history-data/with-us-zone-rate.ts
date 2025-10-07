import type { TBuilder } from '@/core';
import { ZoneRateDraftRest } from '../../../../zone-rate/zone-rate-draft';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from '../../builders';
import type {
  TShippingMethodDraft,
  TShippingMethodDraftGraphql,
  TShippingMethodDraftRest,
} from '../../types';

//default(false) as more than one default method will lead to an error

const populateWithUsZoneRatePreset = <
  TModel extends TShippingMethodDraftGraphql | TShippingMethodDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder
    .taxCategory(null!)
    .zoneRates([ZoneRateDraftRest.presets.changeHistoryData.usZone()])
    .isDefault(false);
};

export const restPreset = (): TBuilder<TShippingMethodDraftRest> =>
  populateWithUsZoneRatePreset(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TShippingMethodDraftGraphql> =>
  populateWithUsZoneRatePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<TShippingMethodDraft> =>
  populateWithUsZoneRatePreset(CompatModelBuilder());
