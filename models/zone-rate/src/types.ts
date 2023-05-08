import { ZoneRate, ZoneRateDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TZoneRate = ZoneRate;
export type TZoneRateDraft = ZoneRateDraft;

export type TZoneRateGraphql = TZoneRate & {
  __typename: 'ZoneRate';
};

export type TZoneRateDraftGraphql = TZoneRateDraft & {
  __typename: 'ZoneRateDraft';
};

export type TZoneRateBuilder = TBuilder<TZoneRate>;
export type TZoneRateDraftBuilder = TBuilder<TZoneRateDraft>;
export type TCreateZoneRateBuilder = () => TZoneRateBuilder;
export type TCreateZoneRateDraftBuilder = () => TZoneRateDraftBuilder;
