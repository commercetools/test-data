import {
  ProductTailoringAttributeRest,
  ProductTailoringAttributeGraphql,
} from './index';

describe('ProductTailoringAttribute Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = ProductTailoringAttributeRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        value: expect.objectContaining({
          en: expect.any(String),
        }),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = ProductTailoringAttributeGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        attributeDefinition: null,
        referencedResource: null,
        referencedResourceSet: [],
        value: '{}',
        __typename: 'ProductTailoringAttribute',
      })
    );
  });
});
