import { RestModelBuilder } from './builders';
import * as StandardScheduleDraftPresets from './presets';

export const StandardScheduleDraftRest = {
  random: RestModelBuilder,
  presets: StandardScheduleDraftPresets.restPresets,
};
