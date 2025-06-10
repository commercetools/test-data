import { GraphqlModelBuilder } from './builders';
import * as MyViewSortPresets from './presets';

export const MyViewSortGraphql = {
  random: GraphqlModelBuilder,
  presets: MyViewSortPresets.graphqlPresets,
};
