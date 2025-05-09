import type { Address, AddressDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';

export type TAddress = Address;
export type TAddressDraft = AddressDraft;

export type TAddressGraphql = TAddress & {
  __typename: 'Address';
};
export type TAddressDraftGraphql = TAddressDraft;

export type TAddressBuilder = TBuilder<TAddress>;
export type TAddressDraftBuilder = TBuilder<TAddressDraft>;
export type TCreateAddressBuilder = () => TAddressBuilder;
export type TCreateAddressDraftBuilder = () => TAddressDraftBuilder;
