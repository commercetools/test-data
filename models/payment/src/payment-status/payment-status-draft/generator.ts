import { ReferenceDraft } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { TPaymentStatusDraft } from '../types';

// https://docs.commercetools.com/api/projects/payments#paymentstatusdraft

const generator = Generator<TPaymentStatusDraft>({
  fields: {
    interfaceCode: fake((f) => f.string.uuid()),
    interfaceText: fake((f) => f.lorem.word()),
    state: fake(() => ReferenceDraft.random().typeId('state')),
  },
});

export default generator;
