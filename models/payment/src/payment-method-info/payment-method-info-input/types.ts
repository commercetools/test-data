import { PaymentMethodInfo } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TPaymentMethodInfoInput = PaymentMethodInfo;

export type TPaymentMethodInfoInputGraphQL = TPaymentMethodInfoInput & {
  __typename: 'PaymentMethodInfoInput';
};

export type TPaymentMethodInfoInputBuilder = TBuilder<TPaymentMethodInfoInput>;
export type TCreatePaymentMethodInfoInputBuilder =
  () => TPaymentMethodInfoInputBuilder;
