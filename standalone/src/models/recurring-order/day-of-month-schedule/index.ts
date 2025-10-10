import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as DayOfMonthSchedulePresets from './presets';
export * from './types';

export const DayOfMonthScheduleRest = {
  random: RestModelBuilder,
  presets: DayOfMonthSchedulePresets.restPresets,
};

export const DayOfMonthScheduleGraphql = {
  random: GraphqlModelBuilder,
  presets: DayOfMonthSchedulePresets.graphqlPresets,
};
