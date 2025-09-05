import { GraphqlModelBuilder, RestModelBuilder } from './builders';
import * as constants from './constants';
import * as StandardSchedulePresets from './presets';

export const StandardScheduleRest = {
  constants,
  random: RestModelBuilder,
  presets: StandardSchedulePresets.restPresets,
};

export const StandardScheduleGraphql = {
  constants,
  random: GraphqlModelBuilder,
  presets: StandardSchedulePresets.graphqlPresets,
};
