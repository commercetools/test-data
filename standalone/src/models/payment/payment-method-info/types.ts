import { PaymentMethodInfo } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpPaymentMethodInfo,
  TCtpPaymentMethodInfoInput,
} from '@/graphql-types';

/**
 * @deprecated Use TCtpPaymentMethodInfo or TCtpPaymentMethodInfoDraft instead
 */
export type TPaymentMethodInfo = PaymentMethodInfo;

/**
 * @deprecated Use TCtpPaymentMethodInfoDraft or TCtpPaymentMethodInfoDraftGraphql instead
 */
export type TPaymentMethodInfoDraft = PaymentMethodInfo;

export type TPaymentMethodInfoRest = PaymentMethodInfo;
export type TPaymentMethodInfoDraftRest = PaymentMethodInfo;

export type TPaymentMethodInfoGraphql = TCtpPaymentMethodInfo;
export type TPaymentMethodInfoDraftGraphql = TCtpPaymentMethodInfoInput;

export type TCreatePaymentMethodInfoBuilder<
  TPaymentMethodInfoModel extends
    | TPaymentMethodInfoRest
    | TPaymentMethodInfoGraphql
    | TPaymentMethodInfoDraftRest
    | TPaymentMethodInfoDraftGraphql,
> = () => TBuilder<TPaymentMethodInfoModel>;
