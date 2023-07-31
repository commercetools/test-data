/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TPaymentMethodInfo, TPaymentMethodInfoGraphql } from './types';
import * as PaymentMethodInfo from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TPaymentMethodInfo, TPaymentMethodInfo>(
      'default',
      PaymentMethodInfo.random(),
      expect.objectContaining({
        paymentInterface: null,
        method: null,
        name: expect.objectContaining({
          en: expect.any(String),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TPaymentMethodInfo, TPaymentMethodInfo>(
      'rest',
      PaymentMethodInfo.random(),
      expect.objectContaining({
        paymentInterface: null,
        method: null,
        name: expect.objectContaining({
          en: expect.any(String),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TPaymentMethodInfo, TPaymentMethodInfoGraphql>(
      'graphql',
      PaymentMethodInfo.random(),
      expect.objectContaining({
        __typename: 'PaymentMethodInfo',
        paymentInterface: null,
        method: null,
        name: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
          }),
        ]),
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
          }),
        ]),
      })
    )
  );
});
