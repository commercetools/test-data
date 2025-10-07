import { Zone, ZoneRate } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpZoneRate } from '@/graphql-types';

/**
 * @deprecated use `TZoneRateRest` or `TZoneRateGraphql` instead
 */
export type TZoneRate = ZoneRate;

export type TZoneRateRest = ZoneRate;
export type TZoneRateGraphql = TCtpZoneRate;

export type TCreateZoneRateBuilder<
  TZoneRateModel extends TZoneRateRest | TZoneRateGraphql,
> = () => TBuilder<TZoneRateModel>;
