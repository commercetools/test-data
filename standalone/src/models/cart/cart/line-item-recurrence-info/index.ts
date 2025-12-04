import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as constants from './constants';
import * as LineItemRecurrenceInfoPresets from './presets';
export * from './line-item-recurrence-info-draft';
export * from './types';

export const LineItemRecurrenceInfoRest = {
  constants,
  random: RestModelBuilder,
  presets: LineItemRecurrenceInfoPresets.restPresets,
};

export const LineItemRecurrenceInfoGraphql = {
  constants,
  random: GraphqlModelBuilder,
  presets: LineItemRecurrenceInfoPresets.graphqlPresets,
};
