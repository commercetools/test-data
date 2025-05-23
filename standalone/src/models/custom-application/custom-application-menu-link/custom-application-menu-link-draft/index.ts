import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationMenuLinkDraftPresets from './presets';

export const CustomApplicationMenuLinkDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationMenuLinkDraftPresets.graphqlPresets,
};

/**
 * @deprecated Use `CustomApplicationMenuLinkDraftGraphql` exported model instead of `CustomApplicationMenuLinkDraft`.
 */
export const CustomApplicationMenuLinkDraft = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationMenuLinkDraftPresets.graphqlPresets,
};
