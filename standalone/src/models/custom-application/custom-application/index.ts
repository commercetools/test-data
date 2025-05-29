import * as constants from '../constants';
import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationPresets from './presets';

export const CustomApplicationGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationPresets.graphqlPresets,
  constants,
};

/**
 * @deprecated Use `CustomApplicationGraphql` exported model instead of `CustomApplication`.
 */
export const CustomApplication = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationPresets.graphqlPresets,
};
