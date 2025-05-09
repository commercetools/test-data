import type {
  ShippingMethod,
  ShippingMethodDraft,
  TaxCategory,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import {
  TLocalizedStringGraphql,
  type TReferenceGraphql,
} from '../../commons';

export type TShippingMethod = ShippingMethod & { taxCategory: TaxCategory };
export type TShippingMethodRest = ShippingMethod;
export type TShippingMethodGraphql = TShippingMethod & {
  taxCategoryRef: TReferenceGraphql;
  localizedNameAllLocales: TLocalizedStringGraphql | null;
  localizedDescriptionAllLocales: TLocalizedStringGraphql | null;
  __typename: 'ShippingMethod';
};

export type TShippingMethodDraft = ShippingMethodDraft;
export type TShippingMethodDraftGraphql = TShippingMethodDraft;

export type TShippingMethodBuilder = TBuilder<TShippingMethod>;
export type TShippingMethodDraftBuilder = TBuilder<TShippingMethodDraft>;

export type TCreateShippingMethodBuilder = () => TShippingMethodBuilder;
export type TCreateShippingMethodDraftBuilder =
  () => TShippingMethodDraftBuilder;
