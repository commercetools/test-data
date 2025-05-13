import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationPermissionPresets from './presets';

export const CustomApplicationPermissionGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationPermissionPresets.graphqlPresets,
};
