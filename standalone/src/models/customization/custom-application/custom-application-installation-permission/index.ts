import { GraphqlModelBuilder } from './builders';
import * as constants from './constants';
import * as CustomApplicationInstallationPermissionPresets from './presets';

export const CustomApplicationInstallationPermissionGraphql = {
  constants,
  random: GraphqlModelBuilder,
  presets: CustomApplicationInstallationPermissionPresets.graphqlPresets,
};

/**
 * @deprecated Use `CustomApplicationInstallationPermissionGraphql` exported model instead of `CustomApplicationInstallationPermission`.
 */
export const CustomApplicationInstallationPermission = {
  constants,
  random: GraphqlModelBuilder,
  presets: CustomApplicationInstallationPermissionPresets.graphqlPresets,
};
