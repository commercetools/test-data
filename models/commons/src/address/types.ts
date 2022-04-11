import type { Address } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TAddress = Address;
export type TAddressGraphql = TAddress & {
  __typename: 'Address';
};
export type TAddressBuilder = TBuilder<TAddress>;
export type TCreateAddressBuilder = () => TAddressBuilder;
