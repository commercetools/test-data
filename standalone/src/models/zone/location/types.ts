import { Location } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';

export type TLocation = Location;

export type TLocationGraphql = TLocation & {
  __typename: 'Location';
};

export type TLocationBuilder = TBuilder<TLocation>;
export type TCreateLocationBuilder = () => TLocationBuilder;
