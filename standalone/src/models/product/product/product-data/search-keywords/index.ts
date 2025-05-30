import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as modelPresets from './presets';

export const SearchKeywordsRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const SearchKeywordsGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};
