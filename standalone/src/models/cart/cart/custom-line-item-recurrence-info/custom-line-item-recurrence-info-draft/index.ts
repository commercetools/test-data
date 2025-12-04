import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as CustomLineItemRecurrenceInfoDraftPresets from './presets';

export const CustomLineItemRecurrenceInfoDraftRest = {
  random: RestModelBuilder,
  presets: CustomLineItemRecurrenceInfoDraftPresets.restPresets,
};

export const CustomLineItemRecurrenceInfoDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomLineItemRecurrenceInfoDraftPresets.graphqlPresets,
};
