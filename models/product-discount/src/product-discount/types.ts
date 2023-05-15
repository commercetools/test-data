import {
  ProductDiscount,
  ProductDiscountDraft,
} from '@commercetools/platform-sdk';
import {
  TClientLoggingGraphql,
  TLocalizedStringGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TProductDiscount = ProductDiscount;
export type TProductDiscountDraft = ProductDiscountDraft;

export type TProductDiscountGraphql = TProductDiscount & {
  __typename: 'ProductDiscount';
  createdBy: TClientLoggingGraphql;
  lastModifiedBy: TClientLoggingGraphql;
  nameAllLocales?: TLocalizedStringGraphql | null;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
};
export type TProductDiscountDraftGraphql = Omit<
  TProductDiscountDraft,
  'name' | 'description'
> & {
  name: TLocalizedStringGraphql;
  description?: TLocalizedStringGraphql | null;
};

export type TProductDiscountBuilder = TBuilder<TProductDiscount>;
export type TProductDiscountDraftBuilder = TBuilder<TProductDiscountDraft>;

export type TCreateProductDiscountBuilder = () => TProductDiscountBuilder;
export type TCreateProductDiscountDraftBuilder =
  () => TProductDiscountDraftBuilder;
