import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as modelPresets from './presets';

export * from './types';

export const SearchKeywordRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const SearchKeywordGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};
