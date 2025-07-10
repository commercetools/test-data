import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as constants from './constants';
import * as modelPresets from './presets';

export * from './associate-role-draft';
export * from './types';

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
 * @deprecated Use `AssociateRoleRest` or `AssociateRoleGraphql` exported models instead of `AssociateRole`.
 */
export const AssociateRole = {
  constants,
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
