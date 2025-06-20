import { GraphqlModelBuilder } from './builders';
import * as modelPresets from './presets';

// No REST builder is needed since the REST API accepts custom fields directly as a JSON object, eliminating the need for a raw custom field type.
export const RawCustomFieldGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};
