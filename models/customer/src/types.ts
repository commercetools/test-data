import type { Customer, CustomerDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCustomer = Customer;
export type TCustomerDraft = CustomerDraft;

export type TCustomerGraphql = TCustomer & {
  __typename: 'Customer';
};
export type TCustomerDraftGraphql = TCustomerDraft;

export type TCustomerBuilder = TBuilder<TCustomer>;
export type TCustomerDraftBuilder = TBuilder<TCustomerDraft>;
export type TCreateCustomerBuilder = () => TCustomerBuilder;
export type TCreateCustomerDraftBuilder = () => TCustomerDraftBuilder;
