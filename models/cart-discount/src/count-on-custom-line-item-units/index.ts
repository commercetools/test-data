import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as CountOnCustomLineItemUnitsPresets from './presets';
export * from './src/count-on-custom-line-item-units-draft';
export * from './types';

export const CountOnCustomLineItemUnitsRest = {
  random: RestModelBuilder,
  presets: CountOnCustomLineItemUnitsPresets.restPresets,
};

export const CountOnCustomLineItemUnitsGraphql = {
  random: GraphqlModelBuilder,
  presets: CountOnCustomLineItemUnitsPresets.graphqlPresets,
};
