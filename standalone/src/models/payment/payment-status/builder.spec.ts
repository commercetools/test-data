/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TPaymentStatus, TPaymentStatusGraphql } from './types';
import * as PaymentStatus from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TPaymentStatus, TPaymentStatus>(
      'default',
      PaymentStatus.random(),
      expect.objectContaining({
        interfaceCode: expect.any(String),
        interfaceText: expect.any(String),
        state: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TPaymentStatus, TPaymentStatus>(
      'rest',
      PaymentStatus.random(),
      expect.objectContaining({
        interfaceCode: expect.any(String),
        interfaceText: expect.any(String),
        state: expect.objectContaining({
          typeId: 'state',
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TPaymentStatus, TPaymentStatusGraphql>(
      'graphql',
      PaymentStatus.random(),
      expect.objectContaining({
        interfaceCode: expect.any(String),
        interfaceText: expect.any(String),
        state: null,
        stateRef: expect.objectContaining({
          typeId: 'state',
          __typename: 'Reference',
        }),
        __typename: 'PaymentStatus',
      })
    )
  );
});
