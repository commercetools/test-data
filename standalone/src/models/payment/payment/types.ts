import { Payment, PaymentDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpPayment, TCtpPaymentDraft } from '@/graphql-types';

/**
 * @deprecated Use TCtpPayment or TCtpPaymentDraft instead
 */
export type TPayment = Payment;

/**
 * @deprecated Use TCtpPaymentDraft or TCtpPaymentDraftGraphql instead
 */
export type TPaymentDraft = PaymentDraft;

export type TPaymentRest = Payment;
export type TPaymentDraftRest = PaymentDraft;

export type TPaymentGraphql = TCtpPayment;
export type TPaymentDraftGraphql = TCtpPaymentDraft;

export type TCreatePaymentBuilder<
  TPaymentModel extends
    | TPaymentRest
    | TPaymentGraphql
    | TPaymentDraftRest
    | TPaymentDraftGraphql,
> = () => TBuilder<TPaymentModel>;
