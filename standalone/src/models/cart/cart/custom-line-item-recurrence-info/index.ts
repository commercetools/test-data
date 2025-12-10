import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as CustomLineItemRecurrenceInfoPresets from './presets';
export * from './types';

export const CustomLineItemRecurrenceInfoRest = {
  random: RestModelBuilder,
  presets: CustomLineItemRecurrenceInfoPresets.restPresets,
};

export const CustomLineItemRecurrenceInfoGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomLineItemRecurrenceInfoPresets.graphqlPresets,
};
