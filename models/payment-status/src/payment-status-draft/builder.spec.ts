/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TPaymentStatusDraft, TPaymentStatusDraftGraphql } from './types';
import * as PaymentStatusDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TPaymentStatusDraft, TPaymentStatusDraft>(
      'default',
      PaymentStatusDraft.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TPaymentStatusDraft, TPaymentStatusDraft>(
      'rest',
      PaymentStatusDraft.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TPaymentStatusDraft, TPaymentStatusDraftGraphql>(
      'graphql',
      PaymentStatusDraft.random(),
      expect.objectContaining({
        __typename: 'PaymentStatusDraft',
      })
    )
  );
});
