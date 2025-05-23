import type { Zone, ZoneDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';

export type TZone = Zone;
export type TZoneDraft = ZoneDraft;

export type TZoneGraphql = TZone & {
  __typename: 'Zone';
};
export type TZoneDraftGraphql = TZoneDraft;

export type TZoneBuilder = TBuilder<TZone>;
export type TZoneDraftBuilder = TBuilder<TZoneDraft>;
export type TCreateZoneBuilder = () => TZoneBuilder;
export type TCreateZoneDraftBuilder = () => TZoneDraftBuilder;
