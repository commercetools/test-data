import { ZoneRate, ZoneRateDraft, Zone } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TReferenceGraphql } from '@/models/commons';

/**
 * @deprecated use `TZoneRateRest` or `TZoneRateGraphql` instead
 */
export type TZoneRate = Omit<ZoneRate, 'zone'> & { zone: Zone };

/**
 * @deprecated use `TZoneRateDraftRest` or `TZoneRateDraftGraphql` instead
 */
export type TZoneRateDraft = ZoneRateDraft;

export type TZoneRateRest = ZoneRate;
export type TZoneRateDraftRest = ZoneRateDraft;

export type TZoneRateGraphql = ZoneRate & {
  zoneRef: TReferenceGraphql;
  __typename: 'ZoneRate';
};
export type TZoneRateDraftGraphql = ZoneRateDraft;

export type TCreateZoneRateBuilder<
  TZoneRateModel extends
    | TZoneRateRest
    | TZoneRateGraphql
    | TZoneRateDraftRest
    | TZoneRateDraftGraphql,
> = () => TBuilder<TZoneRateModel>;
