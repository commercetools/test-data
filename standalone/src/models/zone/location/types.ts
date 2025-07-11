import type { Location } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import type { TCtpLocation } from '@/graphql-types';

/**
 * @deprecated Use `TLocationRest` instead.
 */
export type TLocation = Location;

export type TLocationRest = Location;
export type TLocationGraphql = TCtpLocation;

export type TCreateLocationBuilder<
  TLocationModel extends TLocationRest | TLocationGraphql,
> = () => TBuilder<TLocationModel>;
