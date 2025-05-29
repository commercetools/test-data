import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationPermissionDraftPresets from './presets';

export const CustomApplicationPermissionDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationPermissionDraftPresets.graphqlPresets,
};

/**
 * @deprecated Use `CustomApplicationPermissionDraftGraphql` exported model instead of `CustomApplicationPermissionDraft`.
 */
export const CustomApplicationPermissionDraft = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationPermissionDraftPresets.graphqlPresets,
};
