import { Customer, Payment, PaymentDraft } from '@commercetools/platform-sdk';
import type { TReferenceGraphql } from '@commercetools-test-data/commons';
import type {
  TBuilder,
  TPaginatedQueryResult,
} from '@commercetools-test-data/core';

// Default
export type TPayment = Omit<Payment, 'customer'> & {
  customer: Customer;
};
export type TPaymentDraft = PaymentDraft;

// Rest
export type TPaymentRest = Payment;
export type TPaymentDraftRest = PaymentDraft;

// Graphql
export type TPaymentGraphql = TPayment & {
  __typename: 'Payment';
  customerRef: TReferenceGraphql;
  interfaceInteractionsRaw: TPaginatedQueryResult<null>;
};
export type TPaymentDraftGraphql = TPaymentDraft;

export type TPaymentBuilder = TBuilder<TPayment>;
export type TPaymentDraftBuilder = TBuilder<TPaymentDraft>;

export type TCreatePaymentBuilder = () => TPaymentBuilder;
export type TCreatePaymentDraftBuilder = () => TPaymentDraftBuilder;
