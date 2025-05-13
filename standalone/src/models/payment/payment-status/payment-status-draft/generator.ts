import { fake, Generator } from '@/core';
import { ReferenceDraft } from '@/models/commons';
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
