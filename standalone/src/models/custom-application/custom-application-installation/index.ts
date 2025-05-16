import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationInstallationPresets from './presets';

export const CustomApplicationInstallationGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationInstallationPresets.graphqlPresets,
};
