/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { LocalizedString } from '@commercetools-test-data/commons';
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { CustomFieldBooleanType } from '@commercetools-test-data/type';
import type { TCategory, TCategoryGraphql } from './types';
import * as Category from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCategory, TCategory>(
      'default',
      Category.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        orderHint: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        name: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
        slug: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
      })
    )
  );
  it(
    ...createBuilderSpec<TCategory, TCategory>(
      'rest',
      Category.random().name(LocalizedString.random().en('Pants').de('Hosen')),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        orderHint: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        name: expect.objectContaining({
          en: 'Pants',
          de: 'Hosen',
          fr: expect.any(String),
        }),
        slug: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
      })
    )
  );
  it(
    ...createBuilderSpec<TCategory, TCategoryGraphql>(
      'graphql',
      Category.random().name(LocalizedString.random().en('Pants').de('Hosen')),
      expect.objectContaining({
        __typename: 'Category',
        name: expect.any(String),
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'de',
            value: 'Hosen',
          }),
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'en',
            value: 'Pants',
          }),
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'fr',
            value: expect.any(String),
          }),
        ]),
        orderHint: expect.any(String),
        description: undefined,
        descriptionAllLocales: null,
        createdBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        lastModifiedBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
      })
    )
  );

  it('should allow customization', () => {
    const category = Category.random()
      .ancestors([Category.random().key('category-ancestor-id-1')])
      .custom(CustomFieldBooleanType.random())
      .description(LocalizedString.random().en('Trendy pants'))
      .externalId('external-id-123')
      .id('category-123')
      .key('key-pants')
      .metaDescription(LocalizedString.random().en('Trendy pants (meta)'))
      .metaKeywords(LocalizedString.random().en('pants (meta)'))
      .metaTitle(LocalizedString.random().en('Pants (meta)'))
      .name(LocalizedString.random().en('Pants'))
      .orderHint('0.5')
      .parent(Category.random().key('category-parent-id-1'))
      .slug(LocalizedString.random().en('product-slug-1'))
      .version(200)
      .buildGraphql();

    expect(category).toEqual(
      expect.objectContaining({
        ancestors: expect.arrayContaining([
          expect.objectContaining({
            key: 'category-ancestor-id-1',
          }),
        ]),
        custom: expect.objectContaining({
          name: 'Boolean',
        }),
        description: 'Trendy pants',
        descriptionAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: 'Trendy pants',
          }),
        ]),
        externalId: 'external-id-123',
        id: 'category-123',
        key: 'key-pants',
        metaTitle: 'Pants (meta)',
        metaTitleAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: 'Pants (meta)',
          }),
        ]),
        metaKeywords: 'pants (meta)',
        metaKeywordsAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: 'pants (meta)',
          }),
        ]),
        metaDescription: 'Trendy pants (meta)',
        metaDescriptionAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: 'Trendy pants (meta)',
          }),
        ]),
        name: 'Pants',
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: 'Pants',
          }),
        ]),
        orderHint: '0.5',
        parent: expect.objectContaining({
          key: 'category-parent-id-1',
        }),
        slug: 'product-slug-1',
        version: 200,
      })
    );
  });
});
