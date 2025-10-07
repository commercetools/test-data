import { ZoneRateDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpZoneRateDraft } from '@/graphql-types';

/**
 * @deprecated use `TZoneRateDraftRest` or `TZoneRateDraftGraphql` instead
 */
export type TZoneRateDraft = ZoneRateDraft;

export type TZoneRateDraftRest = ZoneRateDraft;
export type TZoneRateDraftGraphql = TCtpZoneRateDraft;

export type TCreateZoneRateDraftBuilder<
  TZoneRateDraftModel extends TZoneRateDraftRest | TZoneRateDraftGraphql,
> = () => TBuilder<TZoneRateDraftModel>;
