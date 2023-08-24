import { Payment, PaymentDraft } from '@commercetools/platform-sdk';
import type { TReferenceGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TPayment = Payment;
export type TPaymentDraft = PaymentDraft;

export type TPaymentGraphql = TPayment & {
  __typename: 'Payment';
  customerRef: TReferenceGraphql;
};
export type TPaymentDraftGraphql = TPaymentDraft & {
  __typename: 'PaymentDraft';
};

export type TPaymentBuilder = TBuilder<TPayment>;
export type TPaymentDraftBuilder = TBuilder<TPaymentDraft>;

export type TCreatePaymentBuilder = () => TPaymentBuilder;
export type TCreatePaymentDraftBuilder = () => TPaymentDraftBuilder;
