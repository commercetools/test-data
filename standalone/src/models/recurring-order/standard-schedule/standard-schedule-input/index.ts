import { GraphqlModelBuilder } from './builders';
import * as StandardScheduleInputPresets from './presets';

// Rest version for this model is added as separate model as 'StandardScheduleDraft'
export const StandardScheduleInputGraphql = {
  random: GraphqlModelBuilder,
  presets: StandardScheduleInputPresets.graphqlPresets,
};
