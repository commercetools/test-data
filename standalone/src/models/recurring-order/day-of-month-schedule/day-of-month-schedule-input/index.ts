import { GraphqlModelBuilder } from './builders';
import * as DayOfMonthScheduleInputPresets from './presets';

export const DayOfMonthScheduleInput = {
  random: GraphqlModelBuilder,
  presets: DayOfMonthScheduleInputPresets.graphqlPresets,
};
