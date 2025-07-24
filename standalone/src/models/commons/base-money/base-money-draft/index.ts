import { GraphqlModelBuilder } from './builders';
import * as BaseMoneyDraftPresets from './presets';

// This model only exists in the GraphQL API

export const BaseMoneyDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: BaseMoneyDraftPresets.graphqlPresets,
};
