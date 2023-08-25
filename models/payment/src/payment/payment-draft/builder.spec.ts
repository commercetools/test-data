/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TPaymentDraft, TPaymentDraftGraphql } from '../types';
import * as PaymentDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TPaymentDraft, TPaymentDraft>(
      'default',
      PaymentDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        customer: expect.objectContaining({
          id: expect.any(String),
          typeId: expect.any(String),
        }),
        anonymousId: expect.any(String),
        interfaceId: expect.any(String),
        amountPlanned: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        paymentMethodInfo: expect.objectContaining({
          method: null,
          name: expect.objectContaining({
            en: expect.any(String),
            de: expect.any(String),
            fr: expect.any(String),
          }),
          paymentInterface: null,
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
      })
    )
  );

  it(
    ...createBuilderSpec<TPaymentDraft, TPaymentDraft>(
      'rest',
      PaymentDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        customer: expect.objectContaining({
          id: expect.any(String),
          typeId: expect.any(String),
        }),
        anonymousId: expect.any(String),
        interfaceId: expect.any(String),
        amountPlanned: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        paymentMethodInfo: expect.objectContaining({
          method: null,
          name: expect.objectContaining({
            en: expect.any(String),
            de: expect.any(String),
            fr: expect.any(String),
          }),
          paymentInterface: null,
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
      })
    )
  );

  it(
    ...createBuilderSpec<TPaymentDraft, TPaymentDraftGraphql>(
      'graphql',
      PaymentDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        customer: expect.objectContaining({
          id: expect.any(String),
          typeId: expect.any(String),
          __typename: 'Reference',
        }),
        anonymousId: expect.any(String),
        interfaceId: expect.any(String),
        amountPlanned: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        paymentMethodInfo: expect.objectContaining({
          __typename: 'PaymentMethodInfo',
          method: null,
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
          paymentInterface: null,
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
        __typename: 'PaymentDraft',
      })
    )
  );
});
