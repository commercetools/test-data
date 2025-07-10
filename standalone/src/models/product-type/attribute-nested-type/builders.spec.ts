import { AttributeNestedTypeGraphql, AttributeNestedTypeRest } from './index';

describe('AttributeNestedType model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeNestedTypeRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        name: 'nested',
        typeReference: expect.objectContaining({
          id: expect.any(String),
          typeId: 'product-type',
        }),
      })
    );
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeNestedTypeGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        name: 'nested',
        typeRef: expect.objectContaining({
          typeId: 'product-type',
          __typename: 'Reference',
        }),
        __typename: 'NestedAttributeDefinitionType',
      })
    );
  });
});
