import { PaymentStatus, PaymentStatusDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpPaymentStatus, TCtpPaymentStatusInput } from '@/graphql-types';

/**
 * @deprecated Use TCtpPaymentStatusRest or TCtpPaymentStatusGraphql instead
 */
export type TPaymentStatus = PaymentStatus;

/**
 * @deprecated Use TCtpPaymentStatusDraftRest or TCtpPaymentStatusDraftGraphql instead
 */
export type TPaymentStatusDraft = PaymentStatusDraft;

export type TPaymentStatusRest = PaymentStatus;
export type TPaymentStatusDraftRest = PaymentStatusDraft;

export type TPaymentStatusGraphql = TCtpPaymentStatus;
export type TPaymentStatusDraftGraphql = TCtpPaymentStatusInput;

export type TCreatePaymentStatusBuilder<
  TPaymentStatusModel extends
    | TPaymentStatusRest
    | TPaymentStatusGraphql
    | TPaymentStatusDraftRest
    | TPaymentStatusDraftGraphql,
> = () => TBuilder<TPaymentStatusModel>;
