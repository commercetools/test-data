import { TBuilder } from '@/core';
import { GraphqlModelBuilder } from './builders';
import type { TRawCustomFielGraphql } from './types';

const populateGraphqlModel = (model: TBuilder<TRawCustomFielGraphql>) =>
  model
    .name('testName')
    .value('test value')
    .referencedResource(null)
    .referencedResourceSet([]);

const validateGraphqlModel = (model: TRawCustomFielGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      __typename: 'RawCustomField',
      name: expect.any(String),
      value: expect.anything(),
      referencedResource: null,
      referencedResourceSet: [],
    })
  );
};

describe('CustomFields model builders', () => {
  it('builds a GraphQL model', () => {
    const graphqlModel = populateGraphqlModel(GraphqlModelBuilder()).build();

    validateGraphqlModel(graphqlModel);
  });
});
