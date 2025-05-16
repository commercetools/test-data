import {
  CountOnCustomLineItemUnitsRest,
  CountOnCustomLineItemUnitsGraphql,
} from './index';

describe('CountOnCustomLineItemUnits Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = CountOnCustomLineItemUnitsRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        type: 'CountOnCustomLineItemUnits',
        predicate: expect.any(String),
        minCount: expect.any(Number),
        maxCount: expect.toBeOneOf([expect.any(Number), null]),
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = CountOnCustomLineItemUnitsGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'CountOnCustomLineItemUnits',
        type: 'CountOnCustomLineItemUnits',
        predicate: expect.any(String),
        minCount: expect.any(Number),
        maxCount: expect.toBeOneOf([expect.any(Number), null]),
      })
    );
  });
});
