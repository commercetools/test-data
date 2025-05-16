import { GraphqlModelBuilder } from './builder';
import * as CustomApplicationDraftPresets from './presets';

export const CustomApplicationDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationDraftPresets.graphqlPresets,
};
