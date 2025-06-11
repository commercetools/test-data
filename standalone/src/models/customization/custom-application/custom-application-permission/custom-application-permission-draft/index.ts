import * as constants from '../constants';
import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationPermissionDraftPresets from './presets';

export const CustomApplicationPermissionDraftGraphql = {
  constants,
  random: GraphqlModelBuilder,
  presets: CustomApplicationPermissionDraftPresets.graphqlPresets,
};

/**
 * @deprecated Use `CustomApplicationPermissionDraftGraphql` exported model instead of `CustomApplicationPermissionDraft`.
 */
export const CustomApplicationPermissionDraft = {
  constants,
  random: GraphqlModelBuilder,
  presets: CustomApplicationPermissionDraftPresets.graphqlPresets,
};
