import { Zone, ZoneRate, ZoneRateDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpZoneRate, TCtpZoneRateDraft } from '@/graphql-types';

/**
 * @deprecated use `TZoneRateRest` or `TZoneRateGraphql` instead
 */
export type TZoneRate = ZoneRate;

/**
 * @deprecated use `TZoneRateDraftRest` or `TZoneRateDraftGraphql` instead
 */
export type TZoneRateDraft = ZoneRateDraft;

export type TZoneRateRest = ZoneRate;
export type TZoneRateDraftRest = ZoneRateDraft;

export type TZoneRateGraphql = TCtpZoneRate;
export type TZoneRateDraftGraphql = TCtpZoneRateDraft;

export type TCreateZoneRateBuilder<
  TZoneRateModel extends
    | TZoneRateRest
    | TZoneRateGraphql
    | TZoneRateDraftRest
    | TZoneRateDraftGraphql,
> = () => TBuilder<TZoneRateModel>;
