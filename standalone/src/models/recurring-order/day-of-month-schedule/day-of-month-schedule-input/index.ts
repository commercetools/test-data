import { GraphqlModelBuilder } from './builders';
import * as DayOfMonthScheduleInputPresets from './presets';

// rest model is added as a dayOfMonthScheduleDraft
export const DayOfMonthScheduleInput = {
  random: GraphqlModelBuilder,
  presets: DayOfMonthScheduleInputPresets.graphqlPresets,
};
