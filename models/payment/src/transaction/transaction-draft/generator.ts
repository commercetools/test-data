import { MoneyDraft } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TransactionType, TransactionState } from '../constants';
import type { TTransactionDraft } from '../types';

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
