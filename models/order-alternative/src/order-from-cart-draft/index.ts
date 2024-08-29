import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import { restPresets, graphqlPresets } from './presets';

// export { default as random } from './builder';
export const random = RestModelBuilder;

export const OrderFromCartDraftRest = {
  random: RestModelBuilder,
  presets: restPresets,
};
export const OrderFromCartDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: graphqlPresets,
};
