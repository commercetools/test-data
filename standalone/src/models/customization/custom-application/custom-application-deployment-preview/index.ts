import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationDeploymentPreviewPresets from './presets';

export const CustomApplicationDeploymentPreviewGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationDeploymentPreviewPresets.graphqlPresets,
};

/**
 * @deprecated Use `CustomApplicationDeploymentPreviewGraphql` exported model instead of `CustomApplicationDeploymentPreview`.
 */
export const CustomApplicationDeploymentPreview = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationDeploymentPreviewPresets.graphqlPresets,
};
