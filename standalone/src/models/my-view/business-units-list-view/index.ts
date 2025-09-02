import { GraphqlModelBuilder } from './builders';
import * as BusinessUnitsListViewPresets from './presets';

// This model does not have a REST version as it only exists in the MC Settings service
// which only supports GraphQL.

export const BusinessUnitsListViewGraphql = {
  random: GraphqlModelBuilder,
  presets: BusinessUnitsListViewPresets.graphqlPresets,
};
