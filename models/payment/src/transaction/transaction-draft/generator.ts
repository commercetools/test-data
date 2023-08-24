import { CentPrecisionMoney } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TRANSACTION_STATE, TRANSACTION_TYPE } from '../constants';
import { TTransactionDraft } from '../types';

const [getOlderDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/payments#transactiondraft

const generator = Generator<TTransactionDraft>({
  fields: {
    timestamp: fake(getOlderDate),
    type: oneOf(...Object.values(TRANSACTION_TYPE)),
    amount: fake((f) => CentPrecisionMoney.random()),
    interactionId: null,
    state: oneOf(...Object.values(TRANSACTION_STATE)),
    custom: null,
  },
});

export default generator;
