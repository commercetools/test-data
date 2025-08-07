import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const ImageDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ImageDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ImageDraftRest` or `ImageDraftGraphql` exported models instead of `ImageDraft`.
 */
export const ImageDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
