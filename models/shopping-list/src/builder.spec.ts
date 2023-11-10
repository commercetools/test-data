/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TShoppingList, TShoppingListGraphql } from './types';
import * as ShoppingList from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TShoppingList, TShoppingList>(
      'default',
      ShoppingList.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        customer: expect.objectContaining({
          id: expect.any(String),
          typeId: 'customer',
        }),
        slug: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
        }),
        lineItems: [],
        textLineItems: [],
        deleteDaysAfterLastModification: null,
        anonymousId: expect.any(String),
        store: null,
        custom: null,
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
    ...createBuilderSpec<TShoppingList, TShoppingList>(
      'rest',
      ShoppingList.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        customer: expect.objectContaining({
          id: expect.any(String),
          typeId: 'customer',
        }),
        slug: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
        }),
        lineItems: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            quantity: expect.any(Number),
          }),
        ]),
        textLineItems: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            quantity: expect.any(Number),
          }),
        ]),
        deleteDaysAfterLastModification: null,
        anonymousId: expect.any(String),
        store: null,
        custom: null,
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
    ...createBuilderSpec<TShoppingList, TShoppingListGraphql>(
      'graphql',
      ShoppingList.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        customer: expect.objectContaining({
          id: expect.any(String),
          typeId: 'customer',
        }),
        slug: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
        }),
        lineItems: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            quantity: expect.any(Number),
          }),
        ]),
        textLineItems: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            quantity: expect.any(Number),
          }),
        ]),
        deleteDaysAfterLastModification: null,
        anonymousId: expect.any(String),
        store: null,
        custom: null,
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
});
