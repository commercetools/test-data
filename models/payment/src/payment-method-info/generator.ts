import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
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
