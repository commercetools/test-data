import {
  ProductVariantTailoringRest,
  ProductVariantTailoringGraphql,
} from './index';

describe('ProductVariantTailoring Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = ProductVariantTailoringRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        images: [],
        assets: [],
        attributes: [],
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = ProductVariantTailoringGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        images: [],
        assets: [],
        attributesRaw: [],
        __typename: 'ProductVariantTailoring',
      })
    );
  });
});
