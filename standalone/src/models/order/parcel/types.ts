import type { Parcel } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';

export type TParcel = Parcel;

export type TParcelGraphql = TParcel & {
  __typename: 'Parcel';
};

export type TParcelBuilder = TBuilder<Parcel>;
export type TCreateParcelBuilder = () => TParcelBuilder;
