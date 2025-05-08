import type { Customer, CustomerDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../core';
import { TAddress } from '../commons';

export type TCustomer = Customer & {
  defaultShippingAddress: TAddress | null;
  shippingAddresses: TAddress[] | null;
  defaultBillingAddress: TAddress | null;
  billingAddresses: TAddress[] | null;
};
export type TCustomerDraft = CustomerDraft;

export type TCustomerGraphql = TCustomer & {
  __typename: 'Customer';
};
export type TCustomerDraftGraphql = TCustomerDraft;

export type TCustomerBuilder = TBuilder<TCustomer>;
export type TCustomerDraftBuilder = TBuilder<TCustomerDraft>;
export type TCreateCustomerBuilder = () => TCustomerBuilder;
export type TCreateCustomerDraftBuilder = () => TCustomerDraftBuilder;
