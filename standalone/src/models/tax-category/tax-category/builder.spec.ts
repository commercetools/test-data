/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TTaxCategory, TTaxCategoryGraphql } from './types';
import * as TaxCategory from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TTaxCategory, TTaxCategory>(
      'default',
      TaxCategory.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        rates: expect.any(Array),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TTaxCategory, TTaxCategory>(
      'rest',
      TaxCategory.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        rates: expect.any(Array),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TTaxCategory, TTaxCategoryGraphql>(
      'graphql',
      TaxCategory.random(),
      expect.objectContaining({
        __typename: 'TaxCategory',
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        rates: expect.any(Array),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
      })
    )
  );
});
