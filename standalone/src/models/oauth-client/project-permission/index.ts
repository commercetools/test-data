import { GraphqlModelBuilder } from './builders';
import * as ProjectPermissionPresets from './presets';
export * from './types';

// This model only exists in the MC Gateway GraphQL API

export const ProjectPermissionGraphql = {
  random: GraphqlModelBuilder,
  presets: ProjectPermissionPresets.graphqlPresets,
};
