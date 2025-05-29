import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationPermissionPresets from './presets';

export const CustomApplicationPermissionGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationPermissionPresets.graphqlPresets,
};

/**
 * @deprecated Use `CustomApplicationPermissionGraphql` exported model instead of `CustomApplicationPermission`.
 */
export const CustomApplicationPermission = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationPermissionPresets.graphqlPresets,
};
