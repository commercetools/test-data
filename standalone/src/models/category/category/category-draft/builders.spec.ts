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
      externalId: expect.any(String),
      key: expect.any(String),
      metaDescription: null,
      metaKeywords: null,
      metaTitle: null,
      name: null,
      orderHint: expect.any(String),
      parent: null,
      slug: null,
    })
  );
};

describe('CategoryDraft builders', () => {
  it('should create a REST model object', () => {
    const restCategoryDraft = CategoryDraftRest.random().build();

    validateModel(restCategoryDraft);
  });

  it('should create a GraphQL model object', () => {
    const graphqlCategoryDraft = CategoryDraftGraphql.random().build();

    validateModel(graphqlCategoryDraft);
  });
});

describe('CategoryDraft compatibility builders', () => {
  it('should create a default compatibility model object', () => {
    const categoryDraft = CategoryDraft.random().build();

    validateModel(categoryDraft);
  });

  it('should create a REST compatibility model object', () => {
    const categoryDraft = CategoryDraft.random().buildRest();

    validateModel(categoryDraft);
  });

  it('should create a GraphQL compatibility model object', () => {
    const categoryDraft = CategoryDraft.random().buildGraphql();

    validateModel(categoryDraft);
  });
});
