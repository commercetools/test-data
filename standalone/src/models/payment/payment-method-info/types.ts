import { PaymentMethodInfo } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import { TLocalizedStringGraphql } from '../../commons';

export type TPaymentMethodInfo = PaymentMethodInfo;

export type TPaymentMethodInfoGraphql = TPaymentMethodInfo & {
  nameAllLocales?: TLocalizedStringGraphql | null;
  __typename: 'PaymentMethodInfo';
};

export type TPaymentMethodInfoDraft = PaymentMethodInfo;

export type TPaymentMethodInfoDraftGraphQL = TPaymentMethodInfoDraft;

export type TPaymentMethodInfoBuilder = TBuilder<TPaymentMethodInfo>;
export type TCreatePaymentMethodInfoBuilder = () => TPaymentMethodInfoBuilder;

export type TPaymentMethodInfoDraftBuilder = TBuilder<TPaymentMethodInfoDraft>;
export type TCreatePaymentMethodInfoDraftBuilder =
  () => TPaymentMethodInfoDraftBuilder;
