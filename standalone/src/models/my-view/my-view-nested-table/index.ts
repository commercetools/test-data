import { GraphqlModelBuilder } from './builders';
import * as presets from './presets';

// This model does not have a REST builder as it only exists in the MC Settings service
// which only supports GraphQL.

export const MyViewNestedTableGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
};
