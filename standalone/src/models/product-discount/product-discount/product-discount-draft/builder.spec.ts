/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../../core/test-utils';
import { TProductDiscountDraft, TProductDiscountDraftGraphql } from '../types';
import * as ProductDiscountDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProductDiscountDraft, TProductDiscountDraft>(
      'default',
      ProductDiscountDraft.random(),
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
        predicate: '1=1',
        sortOrder: expect.any(String),
        isActive: expect.any(Boolean),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TProductDiscountDraft, TProductDiscountDraft>(
      'rest',
      ProductDiscountDraft.random(),
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
        predicate: '1=1',
        sortOrder: expect.any(String),
        isActive: expect.any(Boolean),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TProductDiscountDraft, TProductDiscountDraftGraphql>(
      'graphql',
      ProductDiscountDraft.random(),
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
        predicate: '1=1',
        sortOrder: expect.any(String),
        isActive: expect.any(Boolean),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
      })
    )
  );
});
