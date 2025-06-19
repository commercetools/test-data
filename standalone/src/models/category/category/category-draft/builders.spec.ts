import type { TCategoryDraftGraphql, TCategoryDraftRest } from '../types';
import {
  CategoryDraft,
  CategoryDraftGraphql,
  CategoryDraftRest,
} from './index';

const validateModel = (model: TCategoryDraftGraphql | TCategoryDraftRest) => {
  expect(model).toEqual(
    expect.objectContaining({
      assets: null,
      custom: null,
      description: null,
      externalId: null,
      key: null,
      metaDescription: null,
      metaKeywords: null,
      metaTitle: null,
      orderHint: null,
      parent: null,
    })
  );
};

const validateGraphqlModel = (model: TCategoryDraftGraphql) => {
  validateModel(model);
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.arrayContaining([
        expect.objectContaining({
          locale: expect.any(String),
          value: expect.any(String),
        }),
      ]),
      slug: expect.arrayContaining([
        expect.objectContaining({
          locale: expect.any(String),
          value: expect.any(String),
        }),
      ]),
    })
  );
};

const validateRestModel = (model: TCategoryDraftRest) => {
  validateModel(model);
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.objectContaining({
        en: expect.any(String),
      }),
      slug: expect.objectContaining({
        en: expect.any(String),
      }),
    })
  );
};

describe('CategoryDraft builders', () => {
  it('should create a REST model object', () => {
    const restCategoryDraft = CategoryDraftRest.random().build();

    validateRestModel(restCategoryDraft);
  });

  it('should create a GraphQL model object', () => {
    const graphqlCategoryDraft = CategoryDraftGraphql.random().build();

    validateGraphqlModel(graphqlCategoryDraft);
  });
});

describe('CategoryDraft compatibility builders', () => {
  it('should create a default compatibility model object', () => {
    const categoryDraft = CategoryDraft.random().build();

    validateRestModel(categoryDraft);
  });

  it('should create a REST compatibility model object', () => {
    const categoryDraft = CategoryDraft.random().buildRest();

    validateRestModel(categoryDraft);
  });

  it('should create a GraphQL compatibility model object', () => {
    const categoryDraft =
      CategoryDraft.random().buildGraphql<TCategoryDraftGraphql>();

    validateGraphqlModel(categoryDraft);
  });
});
