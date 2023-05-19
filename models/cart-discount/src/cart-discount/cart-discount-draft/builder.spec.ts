/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TCartDiscountDraft, TCartDiscountDraftGraphql } from '../types';
import * as CartDiscountDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCartDiscountDraft, TCartDiscountDraft>(
      'default',
      CartDiscountDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.objectContaining({
          en: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
        }),
        value: expect.objectContaining({
          type: expect.any(String),
        }),
        cartPredicate: '1=1',
        target: null,
        sortOrder: expect.any(String),
        isActive: expect.any(Boolean),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        requiresDiscountCode: expect.any(Boolean),
        stackingMode: expect.any(String),
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TCartDiscountDraft, TCartDiscountDraft>(
      'rest',
      CartDiscountDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.objectContaining({
          en: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
        }),
        value: expect.objectContaining({
          type: expect.any(String),
        }),
        cartPredicate: '1=1',
        sortOrder: expect.any(String),
        isActive: expect.any(Boolean),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        requiresDiscountCode: expect.any(Boolean),
        stackingMode: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TCartDiscountDraft, TCartDiscountDraftGraphql>(
      'graphql',
      CartDiscountDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
          }),
        ]),
        description: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
          }),
        ]),
        value: expect.any(Object),
        cartPredicate: '1=1',
        sortOrder: expect.any(String),
        isActive: expect.any(Boolean),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        requiresDiscountCode: expect.any(Boolean),
        stackingMode: expect.any(String),
      })
    )
  );
});
