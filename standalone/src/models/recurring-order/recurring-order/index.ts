import { GraphqlModelBuilder, RestModelBuilder } from './builders';
import * as constants from './constants';
import * as RecurringOrderPresets from './presets';

export const RecurringOrderRest = {
  constants,
  random: RestModelBuilder,
  presets: RecurringOrderPresets.restPresets,
};

export const RecurringOrderGraphql = {
  constants,
  random: GraphqlModelBuilder,
  presets: RecurringOrderPresets.graphqlPresets,
};
