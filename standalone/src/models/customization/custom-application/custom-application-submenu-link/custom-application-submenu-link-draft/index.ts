import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationSubmenuLinkDraftPresets from './presets';

export const CustomApplicationSubmenuLinkDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationSubmenuLinkDraftPresets.graphqlPresets,
};

/**
 * @deprecated Use `CustomApplicationSubmenuLinkDraftGraphql` exported model instead of `CustomApplicationSubmenuLinkDraft`.
 */
export const CustomApplicationSubmenuLinkDraft = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationSubmenuLinkDraftPresets.graphqlPresets,
};
