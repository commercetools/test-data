import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as ShippingDraftPresets from './presets';

export const ShippingDraftRest = {
  random: RestModelBuilder,
  presets: ShippingDraftPresets.restPresets,
};

export const ShippingDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: ShippingDraftPresets.graphqlPresets,
};
