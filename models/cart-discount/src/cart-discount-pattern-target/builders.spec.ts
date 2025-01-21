import {
  CartDiscountPatternTargetRest,
  CartDiscountPatternTargetGraphql,
} from './index';

describe('CartDiscountPatternTarget Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = CartDiscountPatternTargetRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        type: 'pattern',
        maxOccurrence: expect.toBeOneOf([expect.any(Number), null]),
        selectionMode: expect.any(String),
        targetPattern: expect.arrayContaining([
          expect.objectContaining({
            type: expect.toBeOneOf([
              'CountOnLineItemUnits',
              'CountOnCustomLineItemUnits',
            ]),
            predicate: expect.any(String),
            minCount: expect.any(Number),
            maxCount: expect.toBeOneOf([expect.any(Number), null]),
            excludeCount: expect.any(Number),
          }),
        ]),
        triggerPattern: expect.arrayContaining([
          expect.objectContaining({
            type: expect.toBeOneOf([
              'CountOnLineItemUnits',
              'CountOnCustomLineItemUnits',
            ]),
            predicate: expect.any(String),
            minCount: expect.any(Number),
            maxCount: expect.toBeOneOf([expect.any(Number), null]),
            excludeCount: expect.any(Number),
          }),
        ]),
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = CartDiscountPatternTargetGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'CartDiscountPatternTarget',
        type: 'pattern',
        maxOccurrence: expect.toBeOneOf([expect.any(Number), null]),
        selectionMode: expect.any(String),
        targetPattern: expect.arrayContaining([
          expect.objectContaining({
            __typename: expect.toBeOneOf([
              'CountOnLineItemUnits',
              'CountOnCustomLineItemUnits',
            ]),
            type: expect.toBeOneOf([
              'CountOnLineItemUnits',
              'CountOnCustomLineItemUnits',
            ]),
            predicate: expect.any(String),
            minCount: expect.any(Number),
            maxCount: expect.toBeOneOf([expect.any(Number), null]),
            excludeCount: expect.any(Number),
          }),
        ]),
        triggerPattern: expect.arrayContaining([
          expect.objectContaining({
            __typename: expect.toBeOneOf([
              'CountOnLineItemUnits',
              'CountOnCustomLineItemUnits',
            ]),
            type: expect.toBeOneOf([
              'CountOnLineItemUnits',
              'CountOnCustomLineItemUnits',
            ]),
            predicate: expect.any(String),
            minCount: expect.any(Number),
            maxCount: expect.toBeOneOf([expect.any(Number), null]),
          }),
        ]),
      })
    );
  });
});
