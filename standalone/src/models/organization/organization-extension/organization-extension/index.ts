import { GraphqlModelBuilder } from './builders';
import * as presets from './presets';

export const OrganizationExtensionGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
};

/**
 * @deprecated Use `OrganizationExtensionGraphql` exported model instead of `OrganizationExtension`.
 */
export const OrganizationExtension = {
  random: GraphqlModelBuilder,
  presets: presets.compatPresets,
};
