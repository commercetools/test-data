import type { TBuilder } from '@/core';
import type {
  T{{it.modelName}}Graphql,
  T{{it.modelName}}Rest,
} from '{{@if(it.isDraftModel !== true)}}../..{{#else}}../../..{{/if}}/types';
import { {{it.modelName}}Graphql, {{it.modelName}}Rest } from '../../index';

export const restPreset = (): TBuilder<T{{it.modelName}}Rest> =>
  {{it.modelName}}Rest.random()
    .id('dummy-id');

export const graphqlPreset =
  (): TBuilder<T{{it.modelName}}Graphql> =>
    {{it.modelName}}Graphql.random()
      .id('dummy-id');

// If you have many fields to customize and both presets are the same, you can use this version
// const populatePreset = (builder: TBuilder<T{{it.modelName}}Rest | T{{it.modelName}}Graphql>) => {
//   return builder.id('dummy-id');
// };
// export const restPreset = (): TBuilder<T{{it.modelName}}Rest> =>
//   populatePreset({{it.modelName}}Rest.random());
// export const graphqlPreset = (): TBuilder<T{{it.modelName}}Graphql> =>
//   populatePreset({{it.modelName}}Graphql.random());
