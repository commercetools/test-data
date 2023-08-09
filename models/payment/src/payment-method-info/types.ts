import { PaymentMethodInfo } from '@commercetools/platform-sdk';
import { TLocalizedStringGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TPaymentMethodInfo = PaymentMethodInfo;

export type TPaymentMethodInfoGraphql = TPaymentMethodInfo & {
  nameAllLocales?: TLocalizedStringGraphql | null;
  __typename: 'PaymentMethodInfo';
};

export type TPaymentMethodInfoDraft = PaymentMethodInfo;

export type TPaymentMethodInfoDraftGraphQL = TPaymentMethodInfoDraft & {
  __typename: 'PaymentMethodInfoInput';
};

export type TPaymentMethodInfoBuilder = TBuilder<TPaymentMethodInfo>;
export type TCreatePaymentMethodInfoBuilder = () => TPaymentMethodInfoBuilder;

export type TPaymentMethodInfoDraftBuilder = TBuilder<TPaymentMethodInfoDraft>;
export type TCreatePaymentMethodInfoDraftBuilder =
  () => TPaymentMethodInfoDraftBuilder;
