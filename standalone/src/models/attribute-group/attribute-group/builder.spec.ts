import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from './builders';
import { TAttributeGroupGraphql, TAttributeGroupRest } from './types';

const validateCommonFields = (
  model: TAttributeGroupRest | TAttributeGroupGraphql
) => {
  expect(model).toEqual(
    expect.objectContaining({
      attributes: [],
      createdAt: expect.any(String),
      createdBy: expect.objectContaining({
        clientId: expect.any(String),
      }),
      description: null,
      id: expect.any(String),
      key: null,
      lastModifiedAt: expect.any(String),
      lastModifiedBy: expect.objectContaining({
        clientId: expect.any(String),
      }),
      version: expect.any(Number),
    })
  );
};

const validateRestModel = (model: TAttributeGroupRest) => {
  validateCommonFields(model);

  expect(model).toEqual(
    expect.objectContaining({
      name: expect.objectContaining({
        en: expect.any(String),
        de: expect.any(String),
        fr: expect.any(String),
      }),
    })
  );
};

const validateGraphqlModel = (model: TAttributeGroupGraphql) => {
  validateCommonFields(model);

  expect(model).toEqual(
    expect.objectContaining({
      description: null,
      descriptionAllLocales: null,
      name: expect.any(String),
      nameAllLocales: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
        }),
      ]),
      __typename: 'AttributeGroup',
    })
  );
};

describe('AttributeGroup model builders', () => {
  it('builds a REST model', () => {
    const restModel = RestModelBuilder().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = GraphqlModelBuilder().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('State model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = CompatModelBuilder().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = CompatModelBuilder().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      CompatModelBuilder().buildGraphql<TAttributeGroupGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
