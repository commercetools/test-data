import { CountOnCustomLineItemUnitsDraftGraphql } from './index';

describe('CountOnCustomLineItemUnitsDraft Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    // TODO: Complete the test by adding all the properties of the model
    // and check for the expected values
    const graphqlModel =
      CountOnCustomLineItemUnitsDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
      })
    );
  });
});
