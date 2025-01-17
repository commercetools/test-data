import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TProductTailoring, TProductTailoringGraphql } from './types';
import * as ProductTailoring from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProductTailoring, TProductTailoring>(
      'default',
      ProductTailoring.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          clientId: expect.any(String),
          isPlatformClient: expect.any(Boolean),
        }),
        createdBy: expect.objectContaining({
          clientId: expect.any(String),
          isPlatformClient: expect.any(Boolean),
        }),
        product: expect.objectContaining({
          typeId: 'product',
          id: expect.any(String),
        }),
        store: expect.objectContaining({
          typeId: 'store',
          key: expect.any(String),
        }),
        current: expect.objectContaining({
          name: expect.objectContaining({
            en: expect.any(String),
            de: expect.any(String),
          }),
          description: expect.objectContaining({
            en: expect.any(String),
            de: expect.any(String),
          }),
          variants: expect.any(Array),
        }),
        staged: expect.any(Object),
        published: expect.any(Boolean),
        hasStagedChanges: expect.any(Boolean),
      })
    )
  );

  it(
    ...createBuilderSpec<TProductTailoring, TProductTailoring>(
      'rest',
      ProductTailoring.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        product: expect.objectContaining({
          typeId: 'product',
        }),
        store: expect.objectContaining({
          typeId: 'store',
        }),
        current: expect.objectContaining({
          name: expect.any(Object),
          description: expect.any(Object),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TProductTailoring, TProductTailoringGraphql>(
      'graphql',
      ProductTailoring.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        product: expect.objectContaining({
          typeId: 'product',
        }),
        store: expect.objectContaining({
          typeId: 'store',
        }),
        current: expect.objectContaining({
          name: expect.any(Object),
          description: expect.any(Object),
        }),
        __typename: 'ProductTailoring',
      })
    )
  );
});
