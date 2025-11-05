import { fake, Generator, sequence } from '@/core';
import { CentPrecisionMoney } from '@/models/commons';
import { Customer } from '@/models/customer/customer';
import { createRelatedDates } from '@/utils';
import * as PaymentMethodInfo from '../payment-method-info';
import * as PaymentStatus from '../payment-status';
import { Transaction } from '../transaction';
import { TPayment } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/payments#payment

const generator = Generator<TPayment>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.string.uuid()),
    customer: fake((f) => Customer.random()),
    anonymousId: fake((f) => f.string.uuid()),
    interfaceId: fake((f) => f.string.uuid()),
    amountPlanned: fake((f) => CentPrecisionMoney.random()),
    paymentMethodInfo: fake((f) => PaymentMethodInfo.random()),
    paymentStatus: fake((f) => PaymentStatus.random()),
    transactions: [fake((f) => Transaction.random())],
    interfaceInteractions: [],
    custom: null,
    createdAt: fake(getOlderDate),
    createdBy: null,
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: null,
  },
});

export default generator;
