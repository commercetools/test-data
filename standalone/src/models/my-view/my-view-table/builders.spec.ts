import { MyViewTableGraphql } from './index';

describe('MyViewTable Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = MyViewTableGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        nestedTable: null,
        visibleColumns: [],
        __typename: 'Table',
      })
    );
  });
});
