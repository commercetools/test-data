import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from './builders';
import * as presets from './presets';

export const CategoryDraftRest = {
  presets: presets.restPresets,
  random: RestModelBuilder,
};

export const CategoryDraftGraphql = {
  presets: presets.graphqlPresets,
  random: GraphqlModelBuilder,
};

/**
 * @deprecated use CategoryDraftRest or CategoryDraftGraphql instead
 */
export const CategoryDraft = {
  presets: presets.compatPresets,
  random: CompatModelBuilder,
};
