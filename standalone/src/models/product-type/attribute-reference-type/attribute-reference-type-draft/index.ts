import * as constants from '../constants';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeReferenceTypeDraftRest = {
  constants,
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeReferenceTypeDraftGraphql = {
  constants,
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeReferenceTypeDraftRest` or `AttributeReferenceTypeDraftGraphql` exported models instead of `AttributeReferenceTypeDraft`.
 */
export const AttributeReferenceTypeDraft = {
  constants,
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
