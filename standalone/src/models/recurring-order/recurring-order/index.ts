import { GraphqlModelBuilder } from './builders';
import * as constants from './constants';
import * as RecurringOrderPresets from './presets';

// TODO : Add rest model once recurring orders is available in Public Beta

export const RecurringOrderGraphql = {
  constants,
  random: GraphqlModelBuilder,
  presets: RecurringOrderPresets.graphqlPresets,
};
