import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationPermissionDraftPresets from './presets';

export const CustomApplicationPermissionDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationPermissionDraftPresets.graphqlPresets,
};
