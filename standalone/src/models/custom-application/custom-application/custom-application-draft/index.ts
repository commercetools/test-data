import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationDraftPresets from './presets';

export const CustomApplicationDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationDraftPresets.graphqlPresets,
};

/**
 * @deprecated Use `CustomApplicationDraftGraphql` exported model instead of `CustomApplicationDraft`.
 */
export const CustomApplicationDraft = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationDraftPresets.graphqlPresets,
};
