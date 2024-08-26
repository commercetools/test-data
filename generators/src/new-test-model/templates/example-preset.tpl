import { {{modelName}}Rest, {{modelName}}Graphql } from '..';
// import { TSpecializedBuilder } from '@commercetools-test-data/core';
// import { T{{modelName}}Rest, T{{modelName}}Graphql } from '../types';

const restPreset = () =>
  {{modelName}}Rest.random().id('dummy-id');

const graphqlPreset = () =>
  {{modelName}}Graphql.random().id('dummy-id');

// If both presets are the same, you can use this version
// const populatePreset = (builder: TSpecializedBuilder<T{{modelName}}Rest | T{{modelName}}Graphql>) => {
//   return builder.id('dummy-id');
// };
// const restPreset = () => populatePreset({{modelName}}Rest.random());
// const graphqlPreset = () => populatePreset({{modelName}}Graphql.random());

export default {
  rest: restPreset,
  graphql: graphqlPreset,
};
