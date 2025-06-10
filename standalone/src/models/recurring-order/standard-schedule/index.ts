import { GraphqlModelBuilder } from './builders';
import * as constants from './constants';
import * as StandardSchedulePresets from './presets';

export const StandardScheduleGraphql = {
  constants,
  random: GraphqlModelBuilder,
  presets: StandardSchedulePresets.graphqlPresets,
};
