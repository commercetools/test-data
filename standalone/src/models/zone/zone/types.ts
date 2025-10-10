import type { Zone, ZoneDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpZone } from '@/graphql-types';

export type TZone = Zone;
export type TZoneRest = Zone;
export type TZoneGraphql = TCtpZone;

export type TZoneDraft = ZoneDraft;
export type TZoneDraftRest = ZoneDraft;
// There's not draft graphql type for Zone

export type TCreateZoneBuilder<
  TZoneModel extends TZoneRest | TZoneGraphql | TZoneDraftRest,
> = () => TBuilder<TZoneModel>;
