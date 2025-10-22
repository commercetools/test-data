import { GraphqlModelBuilder } from './builders';
import * as DashboardViewPresets from './presets';

// There's not REST model as this entity only exists in the MC Settings GraphQL API

export const DashboardViewGraphql = {
  random: GraphqlModelBuilder,
  presets: DashboardViewPresets.graphqlPresets,
};
