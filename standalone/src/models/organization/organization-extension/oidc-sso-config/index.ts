import { GraphqlModelBuilder } from './builders';
import * as presets from './presets';

export const OidcSsoConfigGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
};

/**
 * @deprecated Use `OidcSsoConfigGraphql` exported model instead of `OidcSsoConfig`.
 */
export const OidcSsoConfig = {
  random: GraphqlModelBuilder,
  presets: presets.compatPresets,
};
