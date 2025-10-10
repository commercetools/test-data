import { RestModelBuilder } from './builders';
import * as DayOfMonthScheduleDraftPresets from './presets';

export const DayOfMonthScheduleDraftRest = {
  random: RestModelBuilder,
  presets: DayOfMonthScheduleDraftPresets.restPresets,
};
