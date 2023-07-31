import { PaymentStatusDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TPaymentStatusDraft = PaymentStatusDraft;

export type TPaymentStatusDraftGraphql = TPaymentStatusDraft & {
  __typename: 'PaymentStatusDraft';
};

export type TPaymentStatusDraftBuilder = TBuilder<TPaymentStatusDraft>;
export type TCreatePaymentStatusDraftBuilder = () => TPaymentStatusDraftBuilder;
