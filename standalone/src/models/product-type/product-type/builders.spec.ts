import { TProductTypeGraphql, TProductTypeRest } from './types';
import { ProductType, ProductTypeGraphql, ProductTypeRest } from './index';

const validateRestModel = (model: TProductTypeRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      key: expect.any(String),
      version: expect.any(Number),
      createdAt: expect.any(String),
      createdBy: expect.objectContaining({
        customer: expect.objectContaining({ typeId: 'customer' }),
      }),
      lastModifiedAt: expect.any(String),
      lastModifiedBy: expect.objectContaining({
        customer: expect.objectContaining({ typeId: 'customer' }),
      }),
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

const validateGraphqlModel = (model: TProductTypeGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      key: expect.any(String),
      version: expect.any(Number),
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
      name: expect.any(String),
      description: expect.any(String),
      attributeDefinitions: expect.objectContaining({
        results: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'AttributeDefinition',
          }),
        ]),
        total: expect.any(Number),
        offset: expect.any(Number),
        __typename: 'AttributeDefinitionResult',
      }),
      __typename: 'ProductTypeDefinition',
    })
  );
};

describe('ProductType model builders', () => {
  it('builds a REST model', () => {
    const restModel = ProductTypeRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ProductTypeGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('ProductType model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = ProductType.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = ProductType.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      ProductType.random().buildGraphql<TProductTypeGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
