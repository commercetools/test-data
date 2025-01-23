import { CountOnCustomLineItemUnitsDraftGraphql } from './index';

describe('CountOnCustomLineItemUnitsDraft Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel =
      CountOnCustomLineItemUnitsDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        predicate: expect.any(String),
        minCount: expect.any(Number),
        maxCount: expect.toBeOneOf([expect.any(Number), null]),
        excludeCount: expect.any(Number),
      })
    );
  });
});
