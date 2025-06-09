import { GraphqlModelBuilder } from './builders';
import * as presets from './presets';

export const ContactInformationGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPreset,
};

/**
 * @deprecated Use `ContactInformationGraphql` exported model instead of `ContactInformation`.
 */
export const ContactInformation = {
  random: GraphqlModelBuilder,
  presets: presets.compatPreset,
};
