import { CartDiscountPatternTargetDraftGraphql } from './index';

describe('CartDiscountPatternTargetDraft Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = CartDiscountPatternTargetDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        maxOccurrence: expect.toBeOneOf([expect.any(Number), null]),
        selectionMode: expect.any(String),
        targetPattern: expect.arrayContaining([
          expect.objectContaining({
            maxCount: expect.toBeOneOf([expect.any(Number), null]),
            minCount: expect.any(Number),
            predicate: expect.any(String),
          }),
        ]),
        triggerPattern: expect.arrayContaining([
          expect.objectContaining({
            maxCount: expect.toBeOneOf([expect.any(Number), null]),
            minCount: expect.any(Number),
            predicate: expect.any(String),
          }),
        ]),
      })
    );
  });
});
