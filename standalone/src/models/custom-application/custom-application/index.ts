import { GraphqlModelBuilder } from './builders';
import * as CustomApplicationPresets from './presets';

export const CustomApplicationGraphql = {
  random: GraphqlModelBuilder,
  presets: CustomApplicationPresets.graphqlPresets,
};
