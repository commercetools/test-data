/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TPayment, TPaymentGraphql } from './types';
import * as Payment from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TPayment, TPayment>(
      'default',
      Payment.random(),
      expect.objectContaining({
        key: expect.any(String),
        customer: expect.objectContaining({
          id: expect.any(String),
          typeId: 'customer',
        }),
        anonymousId: expect.any(String),
        interfaceId: expect.any(String),
        amountPlanned: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        paymentMethodInfo: expect.objectContaining({
          method: expect.any(String),
          name: expect.objectContaining({
            en: expect.any(String),
            de: expect.any(String),
            fr: expect.any(String),
          }),
          paymentInterface: expect.any(String),
        }),
        paymentStatus: expect.objectContaining({
          interfaceCode: expect.any(String),
          interfaceText: expect.any(String),
          state: null,
        }),
        transactions: expect.arrayContaining([
          expect.objectContaining({
            amount: expect.objectContaining({
              centAmount: expect.any(Number),
              currencyCode: expect.any(String),
              fractionDigits: expect.any(Number),
              type: expect.any(String),
            }),
            timestamp: expect.any(String),
            type: expect.any(String),
            interactionId: null,
            state: expect.any(String),
            id: expect.any(String),
            custom: null,
          }),
        ]),
        interfaceInteractions: expect.arrayContaining([]),
        custom: null,
        createdAt: expect.any(String),
        createdBy: null,
        lastModifiedAt: expect.any(String),
        lastModifiedBy: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TPayment, TPayment>(
      'rest',
      Payment.random(),
      expect.objectContaining({
        key: expect.any(String),
        customer: expect.objectContaining({
          id: expect.any(String),
          typeId: expect.any(String),
          obj: expect.objectContaining({
            id: expect.any(String),
          }),
        }),
        anonymousId: expect.any(String),
        interfaceId: expect.any(String),
        amountPlanned: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        paymentMethodInfo: expect.objectContaining({
          method: expect.any(String),
          name: expect.objectContaining({
            en: expect.any(String),
            de: expect.any(String),
            fr: expect.any(String),
          }),
          paymentInterface: expect.any(String),
        }),
        paymentStatus: expect.objectContaining({
          interfaceCode: expect.any(String),
          interfaceText: expect.any(String),
          state: expect.objectContaining({
            id: expect.any(String),
            typeId: expect.any(String),
          }),
        }),
        transactions: expect.arrayContaining([
          expect.objectContaining({
            amount: expect.objectContaining({
              centAmount: expect.any(Number),
              currencyCode: expect.any(String),
              fractionDigits: expect.any(Number),
              type: expect.any(String),
            }),
            timestamp: expect.any(String),
            type: expect.any(String),
            interactionId: null,
            state: expect.any(String),
            id: expect.any(String),
            custom: null,
          }),
        ]),
        interfaceInteractions: expect.arrayContaining([]),
        custom: null,
        createdAt: expect.any(String),
        createdBy: null,
        lastModifiedAt: expect.any(String),
        lastModifiedBy: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TPayment, TPaymentGraphql>(
      'graphql',
      Payment.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        customer: expect.objectContaining({
          email: expect.any(String),
        }),
        customerRef: expect.objectContaining({
          __typename: 'Reference',
          typeId: expect.any(String),
          id: expect.any(String),
        }),
        anonymousId: expect.any(String),
        interfaceId: expect.any(String),
        amountPlanned: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        paymentMethodInfo: expect.objectContaining({
          __typename: 'PaymentMethodInfo',
          method: expect.any(String),
          name: expect.arrayContaining([
            expect.objectContaining({
              __typename: 'LocalizedString',
              locale: expect.any(String),
              value: expect.any(String),
            }),
          ]),
          nameAllLocales: expect.arrayContaining([
            expect.objectContaining({
              __typename: 'LocalizedString',
              locale: expect.any(String),
              value: expect.any(String),
            }),
          ]),
          paymentInterface: expect.any(String),
        }),
        paymentStatus: expect.objectContaining({
          __typename: 'PaymentStatus',
          interfaceCode: expect.any(String),
          interfaceText: expect.any(String),
          state: null,
          stateRef: expect.objectContaining({
            __typename: 'Reference',
            id: expect.any(String),
            typeId: expect.any(String),
          }),
        }),
        transactions: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'Transaction',
            amount: expect.objectContaining({
              __typename: 'Money',
              centAmount: expect.any(Number),
              currencyCode: expect.any(String),
              fractionDigits: expect.any(Number),
              type: expect.any(String),
            }),
            timestamp: expect.any(String),
            type: expect.any(String),
            interactionId: null,
            state: expect.any(String),
            id: expect.any(String),
            custom: null,
          }),
        ]),
        interfaceInteractions: expect.arrayContaining([]),
        custom: null,
        createdAt: expect.any(String),
        createdBy: null,
        lastModifiedAt: expect.any(String),
        lastModifiedBy: null,
        __typename: 'Payment',
      })
    )
  );
});
