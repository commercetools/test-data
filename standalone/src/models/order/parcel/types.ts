import type { Parcel } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import type { TCtpParcel } from '@/graphql-types';

/**
 * @deprecated use `TParcelRest` instead
 */
export type TParcel = Parcel;
export type TParcelRest = Parcel;
export type TParcelGraphql = TCtpParcel;

export type TCreateParcelBuilder<
  TParcelModel extends TParcelRest | TParcelGraphql,
> = () => TBuilder<TParcelModel>;
