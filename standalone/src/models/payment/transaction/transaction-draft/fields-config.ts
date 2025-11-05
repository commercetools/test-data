import { fake, oneOf, type TModelFieldsConfig } from '@/core';
import { MoneyDraftGraphql, MoneyDraftRest } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { TransactionState, TransactionType } from '../constants';
import type { TTransactionDraftRest, TTransactionDraftGraphql } from '../types';

// Reference: https://docs.commercetools.com/api/projects/payments#transactiondraft

const [getOlderDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  timestamp: fake(getOlderDate),
  type: oneOf(...Object.values(TransactionType)),
  interactionId: null,
  state: oneOf(...Object.values(TransactionState)),
  interfaceId: null,
  custom: null,
};

export const restFieldsConfig: TModelFieldsConfig<TTransactionDraftRest> = {
  fields: {
    ...commonFieldsConfig,
    amount: fake(() => MoneyDraftRest.random()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TTransactionDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      amount: fake(() => MoneyDraftGraphql.random()),
    },
  };
