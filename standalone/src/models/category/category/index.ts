import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from './builders';
import * as presets from './presets';

export const CategoryRest = {
  presets: presets.restPresets,
  random: RestModelBuilder,
};

export const CategoryGraphql = {
  presets: presets.graphqlPresets,
  random: GraphqlModelBuilder,
};

/**
 * @deprecated use CategoryRest or CategoryGraphql instead
 */
export const Category = {
  presets: presets.graphqlPresets,
  random: CompatModelBuilder,
};
