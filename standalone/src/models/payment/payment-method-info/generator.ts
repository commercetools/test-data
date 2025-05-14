import { fake, Generator } from '@/core';
import { LocalizedString } from '@/models/commons';
import { TPaymentMethodInfo } from './types';

// https://docs.commercetools.com/api/projects/payments#paymentmethodinfo

const generator = Generator<TPaymentMethodInfo>({
  fields: {
    paymentInterface: fake((f) => f.lorem.slug(2)),
    method: fake((f) => f.lorem.slug(1)),
    name: fake((f) => LocalizedString.random()),
  },
});

export default generator;
