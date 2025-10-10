import { RestModelBuilder } from './builders';
import * as DayOfMonthScheduleDraftPresets from './presets';

// graphql model is added as a dayOfMonthScheduleInput
export const DayOfMonthScheduleDraftRest = {
  random: RestModelBuilder,
  presets: DayOfMonthScheduleDraftPresets.restPresets,
};
