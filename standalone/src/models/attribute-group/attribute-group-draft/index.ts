import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as modelPresets from './presets';

export const AttributeGroupDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeGroupDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};
