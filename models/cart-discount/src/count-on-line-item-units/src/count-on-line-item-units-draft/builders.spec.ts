import { CountOnLineItemUnitsDraftGraphql } from './index';

describe('CountOnLineItemUnitsDraft Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = CountOnLineItemUnitsDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        predicate: expect.any(String),
        minCount: expect.any(Number),
        maxCount: expect.toBeOneOf([expect.any(Number), null]),
      })
    );
  });
});
