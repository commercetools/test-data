import { fake, Generator } from '@commercetools-test-data/core';
import { TPaymentStatus } from './types';

// https://docs.commercetools.com/api/projects/payments#paymentstatusdraft

const generator = Generator<TPaymentStatus>({
  fields: {
    interfaceCode: fake((f) => f.string.uuid()),
    interfaceText: fake((f) => f.lorem.word()),
    state: null,
  },
});

export default generator;
