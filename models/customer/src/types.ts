import type { TBuilder } from '@commercetools-test-data/core';
import type { Customer, CustomerDraft } from '@commercetools/platform-sdk';

export type TCustomer = Customer;
export type TCustomerDraft = CustomerDraft;

export type TCustomerGraphql = TCustomer & {
  __typename: 'Customer';
};
export type TCustomerDraftGraphql = TCustomerDraft & {
  __typename: 'CustomerDraft';
};

export type TCustomerBuilder = TBuilder<TCustomer>;
export type TCustomerDraftBuilder = TBuilder<TCustomerDraft>;
export type TCreateCustomerBuilder = () => TCustomerBuilder;
export type TCreateCustomerDraftBuilder = () => TCustomerDraftBuilder;
