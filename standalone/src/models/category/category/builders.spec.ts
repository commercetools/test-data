import { LocalizedString } from '@/models/commons';
import { CustomFieldBooleanType } from '@/models/type';
import type { TCategoryGraphql, TCategoryRest } from './types';
import { CategoryRest, CategoryGraphql, Category } from './index';

const validateModel = (model: TCategoryGraphql | TCategoryRest) => {
  expect(model).toEqual(
    expect.objectContaining({
      ancestors: expect.any(Array),
      assets: expect.any(Array),
      createdAt: expect.any(String),
      custom: null,
      externalId: expect.any(String),
      id: expect.any(String),
      key: expect.any(String),
      lastModifiedAt: expect.any(String),
      metaDescription: null,
      metaKeywords: null,
      metaTitle: null,
      orderHint: expect.any(String),
      parent: null,
      version: expect.any(Number),
    })
  );
};

const validateRestModel = (model: TCategoryRest) => {
  validateModel(model);
  expect(model).toEqual(
    expect.objectContaining({
      createdBy: expect.objectContaining({
        clientId: expect.any(String),
      }),
      description: null,
      lastModifiedBy: expect.objectContaining({
        clientId: expect.any(String),
      }),
      name: expect.objectContaining({
        en: expect.any(String),
      }),
      slug: expect.objectContaining({
        en: expect.any(String),
      }),
    })
  );
};

const validateGraphqlModel = (model: TCategoryGraphql) => {
  validateModel(model);
  expect(model).toEqual(
    expect.objectContaining({
      ancestorsRef: [],
      childCount: 0,
      children: null,
      createdBy: expect.objectContaining({
        __typename: 'Initiator',
      }),
      description: null,
      descriptionAllLocales: [],
      lastModifiedBy: expect.objectContaining({
        __typename: 'Initiator',
      }),
      metaDescriptionAllLocales: null,
      metaKeywordsAllLocales: null,
      metaTitleAllLocales: null,
      name: expect.any(String),
      nameAllLocales: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
        }),
      ]),
      parentRef: null, // computed
      slug: expect.any(String),
      slugAllLocales: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
        }),
      ]),
      stagedProductCount: 0,
      __typename: 'Category',
    })
  );
};

describe('Category builders', () => {
  it('should create a REST model object', () => {
    const restCategory = CategoryRest.random().build();

    validateRestModel(restCategory);
  });

  it('should create a GraphQL model object', () => {
    const graphqlCategory = CategoryGraphql.random().build();

    validateGraphqlModel(graphqlCategory);
  });
});

describe('Category compatibility builders', () => {
  it('should create a default compatibility model object', () => {
    const category = Category.random().build();

    validateRestModel(category);
  });

  it('should create a REST compatibility model object', () => {
    const category = CategoryRest.random().build();

    validateRestModel(category);
  });

  it('should create a GraphQL compatibility model object', () => {
    const category = CategoryGraphql.random().build();

    validateGraphqlModel(category);
  });
});

// Keeping this one as it was already here before the migration
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
