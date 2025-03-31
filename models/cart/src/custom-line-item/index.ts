import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatCustomLineItemModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const CustomLineItemRest = {
  random: RestModelBuilder,
  presets: modelPresets.default,
};

export const CustomLineItemGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.default,
};

/**
 * @deprecated use `CustomLineItemRest` or `CustomLineItemGraphql` instead
 */
export const CustomLineItem = {
  random: CompatCustomLineItemModelBuilder,
  presets: modelPresets.default,
};
