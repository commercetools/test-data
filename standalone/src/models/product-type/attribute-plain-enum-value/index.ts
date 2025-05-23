import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributePlainEnumValueRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributePlainEnumValueGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributePlainEnumValueRest` or `AttributePlainEnumValueGraphql` exported models instead of `AttributePlainEnumValue`.
 */
export const AttributePlainEnumValue = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
