import { GraphqlModelBuilder } from './builders';
import * as StandardSchedulePresets from './presets';
export * from './types';

export const StandardScheduleGraphql = {
  random: GraphqlModelBuilder,
  presets: StandardSchedulePresets.graphqlPresets,
};
