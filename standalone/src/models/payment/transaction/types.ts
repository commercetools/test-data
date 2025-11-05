import { Transaction, TransactionDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpTransaction, TCtpTransactionDraft } from '@/graphql-types';

/**
 * @deprecated Use TCtpTransactionRest or TCtpTransactionGraphql instead
 */
export type TTransaction = Transaction;

/**
 * @deprecated Use TCtpTransactionDraftRest or TCtpTransactionDraftGraphql instead
 */
export type TTransactionDraft = TransactionDraft;

export type TTransactionRest = Transaction;
export type TTransactionDraftRest = TransactionDraft;

export type TTransactionGraphql = TCtpTransaction;
export type TTransactionDraftGraphql = TCtpTransactionDraft;

export type TCreateTransactionBuilder<
  TTransactionModel extends
    | TTransactionRest
    | TTransactionGraphql
    | TTransactionDraftRest
    | TTransactionDraftGraphql,
> = () => TBuilder<TTransactionModel>;
