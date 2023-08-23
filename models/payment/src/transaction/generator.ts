import { Money } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TRANSACTION_STATE, TRANSACTION_TYPE } from './constants';
import { TTransaction } from './types';

const [getOlderDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/payments#transaction

const generator = Generator<TTransaction>({
  fields: {
    id: fake((f) => f.string.uuid()),
    timestamp: fake(getOlderDate),
    type: oneOf(...Object.values(TRANSACTION_TYPE)),
    amount: fake((f) => Money.random()),
    interactionId: null,
    state: oneOf(...Object.values(TRANSACTION_STATE)),
    custom: null,
  },
});

export default generator;
