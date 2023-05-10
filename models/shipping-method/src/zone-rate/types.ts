import { ZoneRate, ZoneRateDraft, Zone } from '@commercetools/platform-sdk';
import { TReferenceGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TZoneRate = Omit<ZoneRate, 'zone'> & { zone: Zone };
export type TZoneRateRest = ZoneRate;
export type TZoneRateGraphql = ZoneRate & {
  zoneRef: TReferenceGraphql;
  __typename: 'ZoneRate';
};

export type TZoneRateDraft = ZoneRateDraft;
export type TZoneRateDraftGraphql = TZoneRateDraft & {
  __typename: 'ZoneRateDraft';
};

export type TZoneRateBuilder = TBuilder<TZoneRate>;
export type TZoneRateDraftBuilder = TBuilder<TZoneRateDraft>;

export type TCreateZoneRateBuilder = () => TZoneRateBuilder;
export type TCreateZoneRateDraftBuilder = () => TZoneRateDraftBuilder;
