import {
  CartDiscountPatternTargetDraftRest,
  CartDiscountPatternTargetDraftGraphql,
} from './index';

describe('CartDiscountPatternTargetDraft Builder', () => {
  it('should build properties for the REST representation', () => {
    // TODO: Complete the test by adding all the properties of the model
    // and check for the expected values
    const restModel = CartDiscountPatternTargetDraftRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    // TODO: Complete the test by adding all the properties of the model
    // and check for the expected values
    const graphqlModel = CartDiscountPatternTargetDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
      })
    );
  });
});
