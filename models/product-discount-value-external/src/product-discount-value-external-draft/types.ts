import type { TBuilder } from '@commercetools-test-data/core';
import { ProductDiscountValueExternalDraft } from '@commercetools/platform-sdk';

export type TProductDiscountValueExternalDraft =
  ProductDiscountValueExternalDraft;

export type TProductDiscountValueExternalDraftGraphql =
  TProductDiscountValueExternalDraft & {
    __typename: 'ProductDiscountValueExternalDraft';
  };

export type TProductDiscountValueExternalDraftBuilder =
  TBuilder<TProductDiscountValueExternalDraft>;
export type TCreateProductDiscountValueExternalDraftBuilder =
  () => TProductDiscountValueExternalDraftBuilder;
