import * as constants from '../constants';
import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationDraftPresets from './presets';

export const CustomApplicationDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationDraftPresets.graphqlPresets,
  constants,
};

/**
 * @deprecated Use `CustomApplicationDraftGraphql` exported model instead of `CustomApplicationDraft`.
 */
export const CustomApplicationDraft = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationDraftPresets.graphqlPresets,
  constants,
};
