import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatProjectModelBuilder,
} from './builders';
import { restPresets, graphqlPresets, compatPresets } from './presets';

export * from './types';

export const ProjectRest = {
  random: RestModelBuilder,
  presets: restPresets,
};

export const ProjectGraphql = {
  random: GraphqlModelBuilder,
  presets: graphqlPresets,
};

/**
 * @deprecated Use `ProjectRest` or `ProjectGraphql` instead.
 */
export const Project = {
  random: CompatProjectModelBuilder,
  presets: compatPresets,
};
