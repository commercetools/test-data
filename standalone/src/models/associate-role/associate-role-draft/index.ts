import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AssociateRoleDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AssociateRoleDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AssociateRoleDraftRest` or `AssociateRoleDraftGraphql` exported models instead of `AssociateRoleDraft`.
 */
export const AssociateRoleDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
