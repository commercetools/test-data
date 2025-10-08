import type {
  TAttributeGroupDraftGraphql,
  TAttributeGroupDraftRest,
} from '../types';
import { AttributeGroupDraftGraphql, AttributeGroupDraftRest } from './index';

const validateRestModel = (model: TAttributeGroupDraftRest) => {
  expect(model).toEqual(
    expect.objectContaining({
      key: null,
      name: expect.objectContaining({
        de: expect.any(String),
        en: expect.any(String),
        fr: expect.any(String),
      }),
      description: null,
      attributes: expect.any(Array),
    })
  );
};

const validateGraphqlModel = (model: TAttributeGroupDraftGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      key: null,
      name: expect.arrayContaining([
        expect.objectContaining({
          locale: expect.any(String),
          value: expect.any(String),
        }),
      ]),
      description: null,
      attributes: expect.any(Array),
    })
  );
};

describe('AttributeGroupDraft builders', () => {
  it('should create a REST model object', () => {
    const restDraft = AttributeGroupDraftRest.random().build();
    validateRestModel(restDraft);
  });

  it('should create a GraphQL model object', () => {
    const graphqlDraft = AttributeGroupDraftGraphql.random().build();
    validateGraphqlModel(graphqlDraft);
  });
});
