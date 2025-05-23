import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationPresets from './presets';

export const CustomApplicationGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationPresets.graphqlPresets,
};

/**
 * @deprecated Use `CustomApplicationGraphql` exported model instead of `CustomApplication`.
 */
export const CustomApplication = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationPresets.graphqlPresets,
};
