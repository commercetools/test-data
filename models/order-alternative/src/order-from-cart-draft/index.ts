import { RestModelBuilder, GraphqlModelBuilder } from './builders';

// export { default as random } from './builder';
export const random = RestModelBuilder;
export { default as presets } from './presets';

export const OrderFromCartDraftRest = {
  random: RestModelBuilder,
};
export const OrderFromCartDraftGraphql = {
  random: GraphqlModelBuilder,
};
