import { Transaction, TransactionDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';

export type TTransaction = Transaction;
export type TTransactionDraft = TransactionDraft;

export type TTransactionGraphql = TTransaction & {
  __typename: 'Transaction';
};
export type TTransactionDraftGraphql = TTransactionDraft;

export type TTransactionBuilder = TBuilder<TTransaction>;
export type TTransactionDraftBuilder = TBuilder<TTransactionDraft>;

export type TCreateTransactionBuilder = () => TTransactionBuilder;
export type TCreateTransactionDraftBuilder = () => TTransactionDraftBuilder;
