import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationSubmenuLinkPresets from './presets';

export const CustomApplicationSubmenuLinkGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationSubmenuLinkPresets.graphqlPresets,
};
