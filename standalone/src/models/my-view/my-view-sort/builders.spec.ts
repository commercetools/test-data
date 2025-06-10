import { SortOrder } from './constants';
import { MyViewSortGraphql } from './index';

describe('MyViewSort Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = MyViewSortGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        order: SortOrder.ASCENDING,
        __typename: 'Sort',
      })
    );
  });
});
