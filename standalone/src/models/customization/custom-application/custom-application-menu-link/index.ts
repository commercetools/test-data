import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationMenuLinkPresets from './presets';

export const CustomApplicationMenuLinkGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationMenuLinkPresets.graphqlPresets,
};

/**
 * @deprecated Use `CustomApplicationMenuLinkGraphql` exported model instead of `CustomApplicationMenuLink`.
 */
export const CustomApplicationMenuLink = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationMenuLinkPresets.graphqlPresets,
};
