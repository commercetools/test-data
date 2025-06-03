import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationInstallationPermissionPresets from './presets';

export const CustomApplicationInstallationPermissionGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationInstallationPermissionPresets.graphqlPresets,
};

/**
 * @deprecated Use `CustomApplicationInstallationPermissionGraphql` exported model instead of `CustomApplicationInstallationPermission`.
 */
export const CustomApplicationInstallationPermission = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationInstallationPermissionPresets.graphqlPresets,
};
