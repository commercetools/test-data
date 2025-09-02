import { GraphqlModelBuilder } from './builders';
import * as BusinessUnitsListMyViewPresets from './presets';

// This model does not have a REST version as it only exists in the MC Settings service
// which only supports GraphQL.

export const BusinessUnitsListMyViewGraphql = {
  random: GraphqlModelBuilder,
  presets: BusinessUnitsListMyViewPresets.graphqlPresets,
};
