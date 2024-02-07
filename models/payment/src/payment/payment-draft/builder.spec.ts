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
          method: expect.any(String),
          paymentInterface: expect.any(String),
          name: expect.objectContaining({
            en: expect.any(String),
            de: expect.any(String),
            fr: expect.any(String),
          }),
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
            }),
            timestamp: expect.any(String),
            type: expect.any(String),
            interactionId: null,
            state: expect.any(String),
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
          method: expect.any(String),
          paymentInterface: expect.any(String),
          name: expect.objectContaining({
            en: expect.any(String),
            de: expect.any(String),
            fr: expect.any(String),
          }),
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
            }),
            timestamp: expect.any(String),
            type: expect.any(String),
            interactionId: null,
            state: expect.any(String),
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
        }),
        anonymousId: expect.any(String),
        interfaceId: expect.any(String),
        amountPlanned: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        paymentMethodInfo: expect.objectContaining({
          method: expect.any(String),
          paymentInterface: expect.any(String),
          name: expect.arrayContaining([
            expect.objectContaining({
              locale: expect.any(String),
              value: expect.any(String),
            }),
          ]),
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
            }),
            timestamp: expect.any(String),
            type: expect.any(String),
            interactionId: null,
            state: expect.any(String),
            custom: null,
          }),
        ]),
        interfaceInteractions: expect.arrayContaining([]),
        custom: null,
      })
    )
  );
});
