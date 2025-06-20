import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as ResourceIdentifierPresets from './presets';

export const ResourceIdentifierRest = {
  random: RestModelBuilder,
  presets: ResourceIdentifierPresets.restPresets,
};

export const ResourceIdentifierGraphql = {
  random: GraphqlModelBuilder,
  presets: ResourceIdentifierPresets.graphqlPresets,
};
