import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as TaxPortionDraftPresets from './presets';

export const TaxPortionDraftRest = {
  random: RestModelBuilder,
  presets: TaxPortionDraftPresets.restPresets,
};

export const TaxPortionDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: TaxPortionDraftPresets.graphqlPresets,
};
