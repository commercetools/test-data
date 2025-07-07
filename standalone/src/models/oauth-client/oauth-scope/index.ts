import { GraphqlModelBuilder } from './builders';
import * as constants from './constants';
import * as OAuthScopePresets from './presets';
export * from './types';

// This model only exists in the MC Gateway GraphQL API

export const OAuthScopeGraphql = {
  constants,
  random: GraphqlModelBuilder,
  presets: OAuthScopePresets.graphqlPresets,
};
