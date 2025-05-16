import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as TaxPortionPresets from './presets';
export * from './types';
export * from './tax-portion-draft';

export const TaxPortionRest = {
  random: RestModelBuilder,
  presets: TaxPortionPresets.restPresets,
};

export const TaxPortionGraphql = {
  random: GraphqlModelBuilder,
  presets: TaxPortionPresets.graphqlPresets,
};
