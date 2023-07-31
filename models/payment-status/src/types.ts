import { PaymentStatus } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TPaymentStatus = PaymentStatus;

export type TPaymentStatusGraphql = TPaymentStatus & {
  __typename: 'PaymentStatus';
};

export type TPaymentStatusBuilder = TBuilder<TPaymentStatus>;
export type TCreatePaymentStatusBuilder = () => TPaymentStatusBuilder;
