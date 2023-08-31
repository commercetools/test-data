import { CentPrecisionMoney } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TransactionType, TransactionState } from './constants';
import { TTransaction } from './types';

const [getOlderDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/payments#transaction

const generator = Generator<TTransaction>({
  fields: {
    id: fake((f) => f.string.uuid()),
    timestamp: fake(getOlderDate),
    type: oneOf(...Object.values(TransactionType)),
    amount: fake((f) => CentPrecisionMoney.random()),
    interactionId: null,
    state: oneOf(...Object.values(TransactionState)),
    custom: null,
  },
});

export default generator;
