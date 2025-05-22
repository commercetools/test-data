import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationDeploymentPreviewPresets from './presets';

export const CustomApplicationDeploymentPreviewGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationDeploymentPreviewPresets.graphqlPresets,
};
