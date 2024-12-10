import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as {{it.modelName}}Presets from './presets';
{{@if(it.isDraftRequired === true)}}
export * from './{{it.modelCodename}}-draft';
{{/if}}
{{@if(it.isDraftModel !== true)}}
export * from './types';
{{/if}}

export const {{it.modelName}}Rest = {
  random: RestModelBuilder,
  presets: {{it.modelName}}Presets.restPresets,
};

export const {{it.modelName}}Graphql = {
  random: GraphqlModelBuilder,
  presets: {{it.modelName}}Presets.graphqlPresets
};
