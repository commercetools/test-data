import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatTeamModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export * from './types';

export const TeamRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const TeamGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `TeamRest` or `TeamGraphql` instead.
 */
export const Team = {
  random: CompatTeamModelBuilder,
  presets: modelPresets.compatPresets,
};
