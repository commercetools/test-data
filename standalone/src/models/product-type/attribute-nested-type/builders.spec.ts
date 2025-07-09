import { TAttributeNestedTypeGraphql, TAttributeNestedTypeRest } from './types';
import { AttributeNestedTypeGraphql, AttributeNestedTypeRest } from './index';

function validateRestModel(model: TAttributeNestedTypeRest) {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'nested',
      typeReference: expect.objectContaining({
        id: expect.any(String),
        typeId: 'product-type',
      }),
    })
  );
}

function validateGraphqlModel(model: TAttributeNestedTypeGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'nested',
      typeRef: expect.objectContaining({
        id: expect.any(String),
        typeId: 'product',
      }),
    })
  );
}

describe('AttributeMoneyType model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeNestedTypeRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeNestedTypeGraphql.random().build();

    validateGraphqlModel(graphqlModel);
    expect(graphqlModel.__typename).toEqual('NestedAttributeDefinitionType');
  });
});
