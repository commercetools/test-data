import { GraphqlModelBuilder } from './builders';
import * as StandardScheduleInputPresets from './presets';

export const StandardScheduleInputGraphql = {
  random: GraphqlModelBuilder,
  presets: StandardScheduleInputPresets.graphqlPresets,
};
