import type {
  ShippingMethod,
  ShippingMethodDraft,
  TaxCategory,
  TaxCategoryReference,
} from '@commercetools/platform-sdk';
import { type TReferenceGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TShippingMethod = ShippingMethod & { taxCategory: TaxCategory };
export type TShippingMethodRest = ShippingMethod;
export type TShippingMethodGraphql = TShippingMethod & {
  __typename: 'ShippingMethod';
  taxCategoryRef: TReferenceGraphql;
};

export type TShippingMethodDraft = ShippingMethodDraft;
export type TShippingMethodDraftGraphql = TShippingMethodDraft & {
  __typename: 'ShippingMethodDraft';
};

export type TShippingMethodBuilder = TBuilder<TShippingMethod>;
export type TShippingMethodDraftBuilder = TBuilder<TShippingMethodDraft>;

export type TCreateShippingMethodBuilder = () => TShippingMethodBuilder;
export type TCreateShippingMethodDraftBuilder =
  () => TShippingMethodDraftBuilder;
