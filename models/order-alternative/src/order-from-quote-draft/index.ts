import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as presets from './presets';

export const OrderFromQuoteDraftRest = {
  random: RestModelBuilder,
  presets: presets.restPresets,
};
export const OrderFromQuoteDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
};
