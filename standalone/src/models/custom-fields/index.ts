import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as modelPresets from './presets';

export * from './custom-fields-draft';
export * from './types';

export const CustomFieldsRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const CustomFieldsGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};
