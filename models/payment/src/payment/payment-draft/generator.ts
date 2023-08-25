import { Money, Reference } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import * as PaymentMethodInfo from '../../payment-method-info';
import * as PaymentStatusDraft from '../../payment-status';
import * as TransactionDraft from '../../transaction';
import { TPaymentDraft } from '../types';

// https://docs.commercetools.com/api/projects/payments#paymentdraft

const generator = Generator<TPaymentDraft>({
  fields: {
    key: fake((f) => f.string.uuid()),
    customer: fake(() => Reference.random().typeId('customer')), // TODO: use customerReference preset
    anonymousId: fake((f) => f.string.uuid()),
    interfaceId: fake((f) => f.string.uuid()),
    amountPlanned: fake((f) => Money.random()),
    paymentMethodInfo: fake((f) => PaymentMethodInfo.random()),
    paymentStatus: fake((f) => PaymentStatusDraft.random()),
    transactions: [fake((f) => TransactionDraft.random())],
    interfaceInteractions: [],
    custom: null,
  },
});

export default generator;
