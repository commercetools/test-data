import { GraphqlModelBuilder } from './builders';
import * as QuotesListViewPresets from './presets';
export * from './types';

// This model does not have a REST version as it only exists in the MC Settings service
// which only supports GraphQL.

export const QuotesListViewGraphql = {
  random: GraphqlModelBuilder,
  presets: QuotesListViewPresets.graphqlPresets,
};
