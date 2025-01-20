import {
  CountOnCustomLineItemUnitsRest,
  CountOnCustomLineItemUnitsGraphql,
} from './index';

describe('CountOnCustomLineItemUnits Builder', () => {
  it('should build properties for the REST representation', () => {
    // TODO: Complete the test by adding all the properties of the model
    // and check for the expected values
    const restModel = CountOnCustomLineItemUnitsRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    // TODO: Complete the test by adding all the properties of the model
    // and check for the expected values
    const graphqlModel = CountOnCustomLineItemUnitsGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        __typename: 'CountOnCustomLineItemUnits',
      })
    );
  });
});
