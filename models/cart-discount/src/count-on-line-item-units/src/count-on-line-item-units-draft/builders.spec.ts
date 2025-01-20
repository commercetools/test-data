import { CountOnLineItemUnitsDraftGraphql } from './index';

describe('CountOnLineItemUnitsDraft Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    // TODO: Complete the test by adding all the properties of the model
    // and check for the expected values
    const graphqlModel = CountOnLineItemUnitsDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
      })
    );
  });
});
