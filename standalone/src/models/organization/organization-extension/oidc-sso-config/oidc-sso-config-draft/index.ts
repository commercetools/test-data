import { GraphqlModelBuilder } from './builders';
import * as presets from './presets';

export const OidcSsoConfigDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
};

/**
 * @deprecated Use `OidcSsoConfigDraftGraphql` exported model instead of `OidcSsoConfigDraft`.
 */
export const OidcSsoConfigDraft = {
  random: GraphqlModelBuilder,
  presets: presets.compatPresets,
};
