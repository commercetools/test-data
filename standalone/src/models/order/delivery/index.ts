import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatDeliveryModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const DeliveryRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const DeliveryGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated use `DeliveryRest` or `DeliveryGraphql` instead
 */
export const Delivery = {
  random: CompatDeliveryModelBuilder,
  presets: modelPresets.compatPresets,
};
