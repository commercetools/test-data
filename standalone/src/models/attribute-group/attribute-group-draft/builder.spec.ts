import type {
  TAttributeGroupDraftGraphql,
  TAttributeGroupDraftRest,
} from '../types';
import { AttributeGroupDraftGraphql, AttributeGroupDraftRest } from './index';

const validateRestModel = (model: TAttributeGroupDraftRest) => {
  console.log('Rest model', model);

  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      name: expect.objectContaining({
        de: expect.any(String),
        en: expect.any(String),
        fr: expect.any(String),
      }),
      description: expect.objectContaining({
        de: expect.any(String),
        en: expect.any(String),
        fr: expect.any(String),
      }),
      attributes: expect.any(Array),
    })
  );
};

const validateGraphqlModel = (model: TAttributeGroupDraftGraphql) => {
  console.log('GraphQL model', model);
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      name: expect.arrayContaining([
        expect.objectContaining({
          locale: expect.any(String),
          value: expect.any(String),
        }),
      ]),
      description: expect.arrayContaining([
        expect.objectContaining({
          locale: expect.any(String),
          value: expect.any(String),
        }),
      ]),
      attributes: expect.any(Array),
      __typename: 'AttributeGroupDraft',
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
