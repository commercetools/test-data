import { GraphqlModelBuilder } from './builders';
import * as OAuthClientPresets from './presets';
export * from './types';

// This model only exists in the MC Gateway GraphQL API

export const OAuthClientGraphql = {
  random: GraphqlModelBuilder,
  presets: OAuthClientPresets.graphqlPresets,
};
