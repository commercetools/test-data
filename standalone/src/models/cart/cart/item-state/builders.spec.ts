import { ItemStateRest, ItemStateGraphql } from './index';

describe('ItemState Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = ItemStateRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        quantity: expect.any(Number),
        state: expect.objectContaining({
          id: expect.any(String),
          typeId: 'state',
        }),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = ItemStateGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        quantity: expect.any(Number),
        state: expect.objectContaining({
          __typename: 'State',
        }),
        stateRef: expect.objectContaining({
          typeId: 'state',
          __typename: 'Reference',
        }),
        __typename: 'ItemState',
      })
    );
  });
});
