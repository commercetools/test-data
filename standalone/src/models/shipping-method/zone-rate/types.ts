import { ZoneRate, ZoneRateDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpZoneRate, TCtpZoneRateDraft } from '@/graphql-types';

export type TZoneRateRest = ZoneRate;
export type TZoneRateGraphql = TCtpZoneRate;
/**
 * @deprecated use `TZoneRateRest` or `TZoneRateGraphql` instead
 */
export type TZoneRate = ZoneRate;

export type TZoneRateDraftRest = ZoneRateDraft;
export type TZoneRateDraftGraphql = TCtpZoneRateDraft;
/**
 * @deprecated use `TZoneRateDraftRest` or `TZoneRateDraftGraphql` instead
 */
export type TZoneRateDraft = ZoneRateDraft;

export type TCreateZoneRateBuilder<
  TZoneRateModel extends
    | TZoneRateRest
    | TZoneRateGraphql
    | TZoneRateDraftRest
    | TZoneRateDraftGraphql,
> = () => TBuilder<TZoneRateModel>;
