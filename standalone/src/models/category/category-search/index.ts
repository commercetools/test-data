import { GraphqlModelBuilder } from './builders';
import * as presets from './presets';

// There's no REST builder for CategorySearch because this entity is only available in GraphQL API.

/**
 * @deprecated use CategorySearchGraphql instead
 */
export const CategorySearch = {
  presets: presets.graphqlPresets,
  random: GraphqlModelBuilder,
};

export const CategorySearchGraphql = {
  presets: presets.graphqlPresets,
  random: GraphqlModelBuilder,
};
