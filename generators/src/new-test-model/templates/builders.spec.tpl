import { T{{modelName}}Graphql, T{{modelName}}Rest } from './types';
import { {{modelName}}Rest, {{modelName}}Graphql } from './index';

describe('{{modelName}} Builder', () => {
  it('should build properties for the REST representation', () => {
    // TODO: Complete the test by adding all the properties of the model
    // and check for the expected values
    const restModel = {{modelName}}Rest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    // TODO: Complete the test by adding all the properties of the model
    // and check for the expected values
    const graphqlModel = {{modelName}}Graphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        __typename: '{{modelName}}',
      })
    );
  });
});
