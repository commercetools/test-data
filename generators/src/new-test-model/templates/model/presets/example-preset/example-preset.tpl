import type { TBuilder } from '@commercetools-test-data/core';
import { {{modelName}}Graphql, {{modelName}}Rest } from '../..';
import type {
  T{{modelName}}Graphql,
  T{{modelName}}Rest,
} from '../../types';

export const restPreset = (): TBuilder<T{{modelName}}Rest> =>
  {{modelName}}Rest.random()
    .id('dummy-id');

export const graphqlPreset =
  (): TBuilder<T{{modelName}}Graphql> =>
    {{modelName}}Graphql.random()
      .id('dummy-id');

// If you have many fields to customize and both presets are the same, you can use this version
// const populatePreset = (builder: TBuilder<T{{modelName}}Rest | T{{modelName}}Graphql>) => {
//   return builder.id('dummy-id');
// };
// export const restPreset = (): TBuilder<T{{modelName}}Rest> =>
//   populatePreset({{modelName}}Rest.random());
// export const graphqlPreset = (): TBuilder<T{{modelName}}Graphql> =>
//   populatePreset({{modelName}}Graphql.random());
