import { MyViewNestedTableGraphql } from './index';

describe('MyViewNestedTable Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = MyViewNestedTableGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        visibleColumns: [],
        __typename: 'NestedTable',
      })
    );
  });
});
