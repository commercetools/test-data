import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as constants from './constants';
import * as modelPresets from './presets';

export const AssociateRoleRest = {
  constants,
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AssociateRoleGraphql = {
  constants,
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AssociateRoleRest` or `AssociateRoleGraphql` instead.
 */
export const AssociateRole = {
  constants,
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};

export * from './types';
