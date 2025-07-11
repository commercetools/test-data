import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatAssociateRoleDraftBuilder,
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
 * @deprecated Use `AssociateRoleDraftRest` or `AssociateRoleDraftGraphql` instead.
 */
export const AssociateRoleDraft = {
  random: CompatAssociateRoleDraftBuilder,
  presets: modelPresets.compatPresets,
};
