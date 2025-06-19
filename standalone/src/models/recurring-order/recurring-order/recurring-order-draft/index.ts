import { GraphqlModelBuilder } from './builders';
import * as RecurringOrderDraftPresets from './presets';

// TODO : Add rest model once recurring orders is available in Public Beta

export const RecurringOrderDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: RecurringOrderDraftPresets.graphqlPresets,
};
