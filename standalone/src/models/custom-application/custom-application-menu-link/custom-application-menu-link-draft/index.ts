import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationMenuLinkDraftPresets from './presets';

export const CustomApplicationMenuLinkDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationMenuLinkDraftPresets.graphqlPresets,
};
