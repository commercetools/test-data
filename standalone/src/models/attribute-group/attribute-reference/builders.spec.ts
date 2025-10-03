import { AttributeReferenceRest, AttributeReferenceGraphql } from './index';

describe('AttributeReference Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = AttributeReferenceRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        key: expect.any(String),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = AttributeReferenceGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        __typename: 'AttributeReference',
      })
    );
  });
});
