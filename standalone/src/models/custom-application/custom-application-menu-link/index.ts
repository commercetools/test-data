import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationMenuLinkPresets from './presets';

export const CustomApplicationMenuLinkGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationMenuLinkPresets.graphqlPresets,
};
