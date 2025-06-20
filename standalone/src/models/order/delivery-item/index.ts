import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatDeliveryItemModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const DeliveryItemRest = {
  random: RestModelBuilder,
};

export const DeliveryItemGraphql = {
  random: GraphqlModelBuilder,
};

/**
 * @deprecated use `DeliveryItemRest` or `DeliveryItemGraphql` instead
 */
export const DeliveryItem = {
  random: CompatDeliveryItemModelBuilder,
  presets: modelPresets.default,
};
