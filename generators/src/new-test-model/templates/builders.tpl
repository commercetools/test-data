import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { graphqlGenerator, restGenerator } from './generators';
import { TCreate{{modelName}}Builder, T{{modelName}}Graphql, T{{modelName}}Rest } from './types';

// This is the list of all the nested models this one supports
const commonBuildFields = [];

export const RestModelBuilder: TCreate{{modelName}}Builder<T{{modelName}}Rest> = () =>
  createSpecializedBuilder({
    generator: restGenerator,
    type: 'rest',
    buildFields: commonBuildFields as (keyof T{{modelName}}Rest)[],
  });

export const GraphqlModelBuilder: TCreate{{modelName}}Builder<T{{modelName}}Graphql> = () =>
  createSpecializedBuilder({
    generator: graphqlGenerator,
    type: 'graphql',
    buildFields: [
      ...(commonBuildFields as (keyof T{{modelName}}Graphql)[]),
      // TODO: You might need to add more fields here if the GraphQL has
      // different properties or types than the REST version.
    ],
  });
