import { CountOnLineItemUnitsRest, CountOnLineItemUnitsGraphql } from './index';

describe('CountOnLineItemUnits Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = CountOnLineItemUnitsRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        type: 'CountOnLineItemUnits',
        predicate: expect.any(String),
        minCount: expect.any(Number),
        maxCount: expect.toBeOneOf([expect.any(Number), null]),
        excludeCount: expect.any(Number),
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = CountOnLineItemUnitsGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'CountOnLineItemUnits',
        type: 'CountOnLineItemUnits',
        predicate: expect.any(String),
        minCount: expect.any(Number),
        maxCount: expect.toBeOneOf([expect.any(Number), null]),
        excludeCount: expect.any(Number),
      })
    );
  });
});
