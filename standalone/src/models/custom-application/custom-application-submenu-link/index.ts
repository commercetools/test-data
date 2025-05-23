import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationSubmenuLinkPresets from './presets';

export const CustomApplicationSubmenuLinkGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationSubmenuLinkPresets.graphqlPresets,
};

/**
 * @deprecated Use `CustomApplicationSubmenuLinkGraphql` exported model instead of `CustomApplicationSubmenuLink`.
 */
export const CustomApplicationSubmenuLink = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationSubmenuLinkPresets.graphqlPresets,
};
