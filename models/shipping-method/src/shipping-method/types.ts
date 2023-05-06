import type {
  ShippingMethod,
  ShippingMethodDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TShippingMethod = ShippingMethod;
export type TShippingMethodDraft = ShippingMethodDraft;

export type TShippingMethodGraphql = TShippingMethod & {
  __typename: 'ShippingMethod';
};
export type TShippingMethodDraftGraphql = TShippingMethodDraft & {
  __typename: 'ShippingMethodDraft';
};

export type TShippingMethodBuilder = TBuilder<TShippingMethod>;
export type TShippingMethodDraftBuilder = TBuilder<TShippingMethodDraft>;
export type TCreateShippingMethodBuilder = () => TShippingMethodBuilder;
export type TCreateShippingMethodDraftBuilder =
  () => TShippingMethodDraftBuilder;
