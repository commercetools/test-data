import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as presets from './presets';

export const AttributeGroupRest = {
  random: RestModelBuilder,
  presets: presets.restPresets,
};

export const AttributeGroupGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
};

/**
 * @deprecated use `AttributeGroupRest` or `AttributeGroupGraphql` instead
 */
export const AttributeGroupCompat = {
  random: CompatModelBuilder,
  presets: presets.compatPresets,
};
