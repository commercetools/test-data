import { GraphqlModelBuilder } from './builders';
import * as constants from './constants';
import * as CustomApplicationPermissionPresets from './presets';

export const CustomApplicationPermissionGraphql = {
  constants,
  random: GraphqlModelBuilder,
  presets: CustomApplicationPermissionPresets.graphqlPresets,
};

/**
 * @deprecated Use `CustomApplicationPermissionGraphql` exported model instead of `CustomApplicationPermission`.
 */
export const CustomApplicationPermission = {
  constants,
  random: GraphqlModelBuilder,
  presets: CustomApplicationPermissionPresets.graphqlPresets,
};
