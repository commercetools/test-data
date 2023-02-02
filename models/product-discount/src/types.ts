import { TLocalizedStringGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  ProductDiscount,
  ProductDiscountDraft,
} from '@commercetools/platform-sdk';

export type TProductDiscount = ProductDiscount;
export type TProductDiscountDraft = ProductDiscountDraft;

export type TProductDiscountGraphql = TProductDiscount & {
  __typename: 'ProductDiscount';
};
export type TProductDiscountDraftGraphql = TProductDiscountDraft & {
  __typename: 'ProductDiscountDraft';
  nameAllLocales?: TLocalizedStringGraphql | null;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
};

export type TProductDiscountBuilder = TBuilder<TProductDiscount>;
export type TProductDiscountDraftBuilder = TBuilder<TProductDiscountDraft>;

export type TCreateProductDiscountBuilder = () => TProductDiscountBuilder;
export type TCreateProductDiscountDraftBuilder =
  () => TProductDiscountDraftBuilder;
