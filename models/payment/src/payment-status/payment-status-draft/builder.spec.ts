/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TPaymentStatusDraft, TPaymentStatusDraftGraphql } from '../types';
import * as PaymentStatusDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TPaymentStatusDraft, TPaymentStatusDraft>(
      'default',
      PaymentStatusDraft.random(),
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
    ...createBuilderSpec<TPaymentStatusDraft, TPaymentStatusDraft>(
      'rest',
      PaymentStatusDraft.random(),
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
    ...createBuilderSpec<TPaymentStatusDraft, TPaymentStatusDraftGraphql>(
      'graphql',
      PaymentStatusDraft.random(),
      expect.objectContaining({
        interfaceCode: expect.any(String),
        interfaceText: expect.any(String),
        state: expect.objectContaining({
          typeId: 'state',
        }),
      })
    )
  );
});
