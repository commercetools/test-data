import { TSpecializedBuilder } from '@commercetools-test-data/core';
import { {{modelName}}Graphql, {{modelName}}Rest } from '../..';
import {
  T{{modelName}}Graphql,
  T{{modelName}}Rest,
} from '../../types';

export const restPreset = (): TSpecializedBuilder<T{{modelName}}Rest> =>
  {{modelName}}Rest.random()
    .id('dummy-id');

export const graphqlPreset =
  (): TSpecializedBuilder<T{{modelName}}Graphql> =>
    {{modelName}}Graphql.random()
      .id('dummy-id');

// If you have many fields to cutomize and both presets are the same, you can use this version
// const populatePreset = (builder: TSpecializedBuilder<T{{modelName}}Rest | T{{modelName}}Graphql>) => {
//   return builder.id('dummy-id');
// };
// export const restPreset = (): TSpecializedBuilder<T{{modelName}}Rest> =>
//   populatePreset({{modelName}}Rest.random());
// export const graphqlPreset = (): TSpecializedBuilder<T{{modelName}}Graphql> =>
//   populatePreset({{modelName}}Graphql.random());
