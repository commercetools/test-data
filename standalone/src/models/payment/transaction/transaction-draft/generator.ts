import { fake, Generator, oneOf } from '@/core';
import { MoneyDraft } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { TransactionType, TransactionState } from '../constants';
import { TTransactionDraft } from '../types';

const [getOlderDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/payments#transactiondraft

const generator = Generator<TTransactionDraft>({
  fields: {
    timestamp: fake(getOlderDate),
    type: oneOf(...Object.values(TransactionType)),
    amount: fake(() => MoneyDraft.random()),
    interactionId: null,
    state: oneOf(...Object.values(TransactionState)),
    custom: null,
  },
});

export default generator;
