import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as presets from './presets';

export const PaymentStatusDraftRest = {
  random: RestModelBuilder,
  presets: presets.restPresets,
};

export const PaymentStatusDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
};

/**
 * @deprecated Use `PaymentStatusDraftRest` or `PaymentStatusDraftGraphql` exported models instead of `PaymentStatusDraft`.
 */
export const PaymentStatusDraft = {
  random: CompatModelBuilder,
  presets: presets.compatPresets,
};
