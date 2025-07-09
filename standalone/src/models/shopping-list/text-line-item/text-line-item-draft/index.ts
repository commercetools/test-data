import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as modelPresets from './presets';

export const TextLineItemDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const TextLineItemDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};
