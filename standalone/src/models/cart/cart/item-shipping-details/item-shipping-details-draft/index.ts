import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as ItemShippingDetailsDraftPresets from './presets';

export const ItemShippingDetailsDraftRest = {
  random: RestModelBuilder,
  presets: ItemShippingDetailsDraftPresets.restPresets,
};

export const ItemShippingDetailsDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: ItemShippingDetailsDraftPresets.graphqlPresets,
};
