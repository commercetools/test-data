import { RestModelBuilder } from './builders';
import * as StandardScheduleDraftPresets from './presets';

// GraphQl version for this model is added as separate model as 'StandardScheduleInput'
export const StandardScheduleDraftRest = {
  random: RestModelBuilder,
  presets: StandardScheduleDraftPresets.restPresets,
};
