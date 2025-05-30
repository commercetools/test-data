import * as constants from '../constants';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeDefinitionDraftRest = {
  constants: constants,
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeDefinitionDraftGraphql = {
  constants: constants,
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeDefinitionDraftRest` or `AttributeDefinitionDraftGraphql` exported models instead of `AttributeDefinitionDraft`.
 */
export const AttributeDefinitionDraft = {
  constants: constants,
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
