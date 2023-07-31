/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TPaymentStatus, TPaymentStatusGraphql } from './types';
import * as PaymentStatus from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TPaymentStatus, TPaymentStatus>(
      'default',
      PaymentStatus.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TPaymentStatus, TPaymentStatus>(
      'rest',
      PaymentStatus.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TPaymentStatus, TPaymentStatusGraphql>(
      'graphql',
      PaymentStatus.random(),
      expect.objectContaining({
        __typename: 'PaymentStatus',
      })
    )
  );
});
