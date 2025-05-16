import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as CountOnLineItemUnitsPresets from './presets';
export * from './src/count-on-line-item-units-draft';
export * from './types';

export const CountOnLineItemUnitsRest = {
  random: RestModelBuilder,
  presets: CountOnLineItemUnitsPresets.restPresets,
};

export const CountOnLineItemUnitsGraphql = {
  random: GraphqlModelBuilder,
  presets: CountOnLineItemUnitsPresets.graphqlPresets,
};
