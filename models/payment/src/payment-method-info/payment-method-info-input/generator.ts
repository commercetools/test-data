import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { TPaymentMethodInfoInput } from './types';

// https://docs.commercetools.com/api/projects/payments#paymentmethodinfo

const generator = Generator<TPaymentMethodInfoInput>({
  fields: {
    paymentInterface: null,
    method: null,
    name: fake((f) => LocalizedString.random()),
  },
});

export default generator;
