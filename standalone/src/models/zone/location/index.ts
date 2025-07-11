import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatLocationModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const LocationRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const LocationGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `LocationRest` or `LocationGraphql` instead.
 */
export const Location = {
  random: CompatLocationModelBuilder,
  presets: modelPresets.compatPresets,
};

export * from './types';
