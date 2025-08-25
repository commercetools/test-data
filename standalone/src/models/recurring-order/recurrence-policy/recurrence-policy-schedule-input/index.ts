import { GraphqlModelBuilder } from './builders';
import * as RecurrencePolicyScheduleInputPresets from './presets';
export * from './types';

export const RecurrencePolicyScheduleInputGraphql = {
  random: GraphqlModelBuilder,
  presets: RecurrencePolicyScheduleInputPresets.graphqlPresets,
};
