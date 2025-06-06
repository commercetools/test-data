/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@/core/test-utils';
import type { TShoppingListDraft, TShoppingListDraftGraphql } from '../types';
import * as ShoppingListDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TShoppingListDraft, TShoppingListDraft>(
      'default',
      ShoppingListDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        slug: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
        customer: expect.objectContaining({
          id: expect.any(String),
          typeId: 'customer',
        }),
        description: expect.objectContaining({
          en: expect.any(String),
        }),
        anonymousId: expect.any(String),
        deleteDaysAfterLastModification: null,
        lineItems: [],
        textLineItems: [],
        store: null,
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TShoppingListDraft, TShoppingListDraft>(
      'rest',
      ShoppingListDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        slug: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
        customer: expect.objectContaining({
          id: expect.any(String),
          typeId: 'customer',
        }),
        description: expect.objectContaining({
          en: expect.any(String),
        }),
        anonymousId: expect.any(String),
        deleteDaysAfterLastModification: null,
        lineItems: [],
        textLineItems: [],
        store: null,
        custom: null,
      })
    )
  );
  // Note that the ShoppingListDraft graphql is provided as scaffolding only and may not be complete at this time.
  it(
    ...createBuilderSpec<TShoppingListDraft, TShoppingListDraftGraphql>(
      'graphql',
      ShoppingListDraft.random(),
      expect.objectContaining({
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
        customer: expect.objectContaining({
          id: expect.any(String),
          typeId: 'customer',
        }),
        description: expect.arrayContaining([
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
        anonymousId: expect.any(String),
        deleteDaysAfterLastModification: null,
        lineItems: [],
        textLineItems: [],
        store: null,
        custom: null,
      })
    )
  );
});
