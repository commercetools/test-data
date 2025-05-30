import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributePlainEnumValueDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributePlainEnumValueDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributePlainEnumValueDraftRest` or `AttributePlainEnumValueDraftGraphql` exported models instead of `AttributePlainEnumValueDraft`.
 */
export const AttributePlainEnumValueDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
