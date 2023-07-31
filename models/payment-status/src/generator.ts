import { Generator } from '@commercetools-test-data/core';
import { TPaymentStatus } from './types';

// https://docs.commercetools.com/api/projects/payments#paymentstatusdraft

const generator = Generator<TPaymentStatus>({
  fields: {
    interfaceCode: null,
    interfaceText: null,
    state: null,
  },
});

export default generator;
