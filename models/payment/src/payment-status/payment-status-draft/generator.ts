import { Generator } from '@commercetools-test-data/core';
import { TPaymentStatusDraft } from '../types';

// https://docs.commercetools.com/api/projects/payments#paymentstatusdraft

const generator = Generator<TPaymentStatusDraft>({
  fields: {
    interfaceCode: null,
    interfaceText: null,
    state: null,
  },
});

export default generator;
