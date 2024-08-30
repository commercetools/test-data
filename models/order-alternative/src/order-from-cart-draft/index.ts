import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import { restPresets, graphqlPresets } from './presets';

export const OrderFromCartDraftRest = {
  random: RestModelBuilder,
  presets: restPresets,
};
export const OrderFromCartDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: graphqlPresets,
};
