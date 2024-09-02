import { RestModelBuilder, GraphqlModelBuilder } from './builders';
export * from './types';
export * as {{modelName}}Presets from './presets';

export const {{modelName}}Rest = {
  random: RestModelBuilder,
};

export const {{modelName}}Graphql = {
  random: GraphqlModelBuilder,
};
