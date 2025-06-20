import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatDeliveryItemModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const DeliveryItemRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const DeliveryItemGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated use `DeliveryItemRest` or `DeliveryItemGraphql` instead
 */
export const DeliveryItem = {
  random: CompatDeliveryItemModelBuilder,
  presets: modelPresets.compatPresets,
};
