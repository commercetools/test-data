import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { TPaymentMethodInfoDraft } from '../types';

// https://docs.commercetools.com/api/projects/payments#paymentmethodinfo

/**
 * This model does not have a corresponding REST entity,
 * as `PaymentMethodInfoDraft` doesn't exist.
 *
 * It's been created specifically for GraphQL transformations
 * when needing `PaymentMethodInfoInput`.
 */

const generator = Generator<TPaymentMethodInfoDraft>({
  fields: {
    paymentInterface: fake((f) => f.lorem.slug(2)),
    method: fake((f) => f.lorem.slug(1)),
    name: fake((f) => LocalizedString.random()),
  },
});

export default generator;
