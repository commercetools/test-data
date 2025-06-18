import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as ResourceIdentifierPresets from './presets';
export * from './types';

export const ResourceIdentifierRest = {
  random: RestModelBuilder,
  presets: ResourceIdentifierPresets.restPresets,
};

export const ResourceIdentifierGraphql = {
  random: GraphqlModelBuilder,
  presets: ResourceIdentifierPresets.graphqlPresets,
};
