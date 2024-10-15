import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as {{it.modelName}}Presets from './presets';
export * from './types';

export const {{it.modelName}}Rest = {
  random: RestModelBuilder,
  presets: {{it.modelName}}Presets.restPresets,
};

export const {{it.modelName}}Graphql = {
  random: GraphqlModelBuilder,
  presets: {{it.modelName}}Presets.graphqlPresets
};
