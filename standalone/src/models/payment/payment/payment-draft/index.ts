import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as presets from './presets';

export const PaymentDraftRest = {
  random: RestModelBuilder,
  presets: presets.restPresets,
};

export const PaymentDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
};

/**
 * @deprecated Use `PaymentDraftRest` or `PaymentDraftGraphql` exported models instead of `PaymentDraft`.
 */
export const PaymentDraft = {
  random: CompatModelBuilder,
  presets: presets.compatPresets,
};
