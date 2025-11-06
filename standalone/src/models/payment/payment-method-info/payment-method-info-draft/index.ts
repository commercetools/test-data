import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as presets from './presets';

export const PaymentMethodInfoDraftRest = {
  random: RestModelBuilder,
  presets: presets.restPresets,
};

export const PaymentMethodInfoDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
};

/**
 * @deprecated Use `PaymentMethodInfoDraftRest` or `PaymentMethodInfoDraftGraphql` exported models instead of `PaymentMethodInfoDraft`.
 */
export const PaymentMethodInfoDraft = {
  random: CompatModelBuilder,
  presets: presets.compatPresets,
};
