/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import { TPaymentMethodInfo, TPaymentMethodInfoGraphql } from './types';
import * as PaymentMethodInfo from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TPaymentMethodInfo, TPaymentMethodInfo>(
      'default',
      PaymentMethodInfo.random(),
      expect.objectContaining({
        paymentInterface: expect.any(String),
        method: expect.any(String),
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
        paymentInterface: expect.any(String),
        method: expect.any(String),
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
        paymentInterface: expect.any(String),
        method: expect.any(String),
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
