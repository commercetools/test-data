import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as LineItemRecurrenceInfoDraftPresets from './presets';

export const LineItemRecurrenceInfoDraftRest = {
  random: RestModelBuilder,
  presets: LineItemRecurrenceInfoDraftPresets.restPresets,
};

export const LineItemRecurrenceInfoDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: LineItemRecurrenceInfoDraftPresets.graphqlPresets,
};
