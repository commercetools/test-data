import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as MethodTaxRatePresets from './presets';

export * from './types';

export const MethodTaxRateRest = {
  random: RestModelBuilder,
  presets: MethodTaxRatePresets.restPresets,
};

export const MethodTaxRateGraphql = {
  random: GraphqlModelBuilder,
  presets: MethodTaxRatePresets.graphqlPresets,
};
