import { PaymentMethodInfo } from '@commercetools/platform-sdk';
import { TLocalizedStringGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TPaymentMethodInfo = PaymentMethodInfo;

export type TPaymentMethodInfoGraphql = TPaymentMethodInfo & {
  nameAllLocales?: TLocalizedStringGraphql | null;
  __typename: 'PaymentMethodInfo';
};

export type TPaymentMethodInfoInput = PaymentMethodInfo;

export type TPaymentMethodInfoInputGraphQL = TPaymentMethodInfoInput & {
  __typename: 'PaymentMethodInfoInput';
};

export type TPaymentMethodInfoBuilder = TBuilder<TPaymentMethodInfo>;
export type TCreatePaymentMethodInfoBuilder = () => TPaymentMethodInfoBuilder;

export type TPaymentMethodInfoInputBuilder = TBuilder<TPaymentMethodInfoInput>;
export type TCreatePaymentMethodInfoInputBuilder =
  () => TPaymentMethodInfoInputBuilder;
