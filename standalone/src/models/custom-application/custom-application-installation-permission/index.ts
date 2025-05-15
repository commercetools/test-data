import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationInstallationPermissionPresets from './presets';

export const CustomApplicationInstallationPermissionGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationInstallationPermissionPresets.graphqlPresets,
};
