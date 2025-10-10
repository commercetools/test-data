import type { Zone, ZoneDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpZone } from '@/graphql-types';
import { TLocationGraphql } from '../location/types';

export type TZone = Zone;
export type TZoneRest = Zone;
export type TZoneGraphql = TCtpZone;

export type TZoneDraft = ZoneDraft;
export type TZoneDraftRest = ZoneDraft;
// There's not a ZoneDraftGraphql type in the GraphQL API
// so we define it manually here for consistency
export type TZoneDraftGraphql = {
  key?: string;
  name: string;
  description?: string;
  locations?: TLocationGraphql[];
};

export type TCreateZoneBuilder<
  TZoneModel extends
    | TZoneRest
    | TZoneGraphql
    | TZoneDraftRest
    | TZoneDraftGraphql,
> = () => TBuilder<TZoneModel>;
