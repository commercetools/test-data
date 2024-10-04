import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as {{modelName}}Presets from './presets';
export * from './types';

export const {{modelName}}Rest = {
  random: RestModelBuilder,
  presets: {{modelName}}Presets.restPresets,
};

export const {{modelName}}Graphql = {
  random: GraphqlModelBuilder,
  presets: {{modelName}}Presets.graphqlPresets
};
