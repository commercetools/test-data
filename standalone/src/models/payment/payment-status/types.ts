import { PaymentStatus, PaymentStatusDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import { TReferenceGraphql } from '../../commons';

export type TPaymentStatus = PaymentStatus;

export type TPaymentStatusDraft = PaymentStatusDraft;

export type TPaymentStatusGraphql = TPaymentStatus & {
  stateRef: TReferenceGraphql | null;
  __typename: 'PaymentStatus';
};

export type TPaymentStatusDraftGraphql = TPaymentStatusDraft;

export type TPaymentStatusBuilder = TBuilder<TPaymentStatus>;
export type TPaymentStatusDraftBuilder = TBuilder<TPaymentStatusDraft>;

export type TCreatePaymentStatusBuilder = () => TPaymentStatusBuilder;
export type TCreatePaymentStatusDraftBuilder = () => TPaymentStatusDraftBuilder;
