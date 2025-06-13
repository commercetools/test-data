import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as modelPresets from './presets';

export const CustomFieldsDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const CustomFieldsDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};
