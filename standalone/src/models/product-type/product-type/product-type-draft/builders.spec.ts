import { TProductTypeDraftGraphql, TProductTypeDraftRest } from '../types';
import {
  ProductTypeDraft,
  ProductTypeDraftGraphql,
  ProductTypeDraftRest,
} from './index';

const validateRestModel = (model: TProductTypeDraftRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      name: expect.any(String),
      description: expect.any(String),
      attributes: expect.arrayContaining([
        expect.objectContaining({
          type: expect.objectContaining({ name: expect.any(String) }),
          name: expect.any(String),
          label: expect.objectContaining({
            de: expect.any(String),
            en: expect.any(String),
            fr: expect.any(String),
          }),
          isRequired: expect.any(Boolean),
          attributeConstraint: expect.any(String),
          inputTip: expect.objectContaining({
            de: expect.any(String),
            en: expect.any(String),
            fr: expect.any(String),
          }),
          inputHint: expect.any(String),
          isSearchable: expect.any(Boolean),
        }),
      ]),
    })
  );
};

const validateGraphqlModel = (model: TProductTypeDraftGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      name: expect.any(String),
      description: expect.any(String),
      attributeDefinitions: expect.arrayContaining([
        expect.objectContaining({
          type: expect.any(Object),
          name: expect.any(String),
          isRequired: expect.any(Boolean),
          attributeConstraint: expect.any(String),
          inputHint: expect.any(String),
          isSearchable: expect.any(Boolean),
        }),
      ]),
    })
  );
};

describe('ProductType model builders', () => {
  it('builds a REST model', () => {
    const restModel = ProductTypeDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ProductTypeDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('ProductType model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = ProductTypeDraft.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = ProductTypeDraft.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      ProductTypeDraft.random().buildGraphql<TProductTypeDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
