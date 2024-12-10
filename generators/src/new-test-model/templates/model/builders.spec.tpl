import { {{it.modelName}}Rest, {{it.modelName}}Graphql } from './index';

describe('{{it.modelName}} Builder', () => {
  it('should build properties for the REST representation', () => {
    // TODO: Complete the test by adding all the properties of the model
    // and check for the expected values
    const restModel = {{it.modelName}}Rest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    // TODO: Complete the test by adding all the properties of the model
    // and check for the expected values
    const graphqlModel = {{it.modelName}}Graphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        {{@if(it.isDraftModel !== true)}}__typename: '{{it.modelName}}',{{/if}}
      })
    );
  });
});
