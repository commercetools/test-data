import { GraphqlModelBuilder } from './builders';
import * as constants from './constants';
import * as StandardSchedulePresets from './presets';

// TODO : Add rest model once recurring orders is available in Public Beta

export const StandardScheduleGraphql = {
  constants,
  random: GraphqlModelBuilder,
  presets: StandardSchedulePresets.graphqlPresets,
};
