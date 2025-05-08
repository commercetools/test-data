import { GraphqlModelBuilder } from './builders';
import * as SelectionOfProductPresets from './presets';
export * from './types';

// There's not REST equivalent for this model
// because it only exists in the GraphQL API

export const SelectionOfProductGraphql = {
  random: GraphqlModelBuilder,
  presets: SelectionOfProductPresets.graphqlPresets,
};
