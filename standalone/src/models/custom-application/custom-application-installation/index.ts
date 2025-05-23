import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationInstallationPresets from './presets';

export const CustomApplicationInstallationGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationInstallationPresets.graphqlPresets,
};

/**
 * @deprecated Use `CustomApplicationInstallationGraphql` exported model instead of `CustomApplicationInstallation`.
 */
export const CustomApplicationInstallation = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationInstallationPresets.graphqlPresets,
};
