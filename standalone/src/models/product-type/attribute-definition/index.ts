import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as constants from './constants';
import * as modelPresets from './presets';

export const AttributeDefinitionRest = {
  constants: constants,
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeDefinitionGraphql = {
  constants: constants,
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeDefinitionRest` or `AttributeDefinitionGraphql` exported models instead of `AttributeDefinition`.
 */
export const AttributeDefinition = {
  constants: constants,
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
