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
  // Note that the ShoppingList graphql is provided as scaffolding only and may not be complete at this time.
  it(
    ...createBuilderSpec<TShoppingList, TShoppingListGraphql>(
      'graphql',
      ShoppingList.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
          }),
          expect.objectContaining({
            locale: 'de',
            value: expect.any(String),
          }),
          expect.objectContaining({
            locale: 'fr',
            value: expect.any(String),
          }),
        ]),
        customer: expect.objectContaining({
          id: expect.any(String),
          typeId: 'customer',
        }),
        slug: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
          }),
          expect.objectContaining({
            locale: 'de',
            value: expect.any(String),
          }),
          expect.objectContaining({
            locale: 'fr',
            value: expect.any(String),
          }),
        ]),
        description: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
          expect.objectContaining({
            locale: 'de',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
          expect.objectContaining({
            locale: 'fr',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        lineItems: [],
        textLineItems: [],
        deleteDaysAfterLastModification: null,
        anonymousId: expect.any(String),
        store: null,
        custom: null,
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
