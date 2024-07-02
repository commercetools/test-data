import {
  ProductDiscountValueExternal,
  ProductDiscountValueExternalDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TProductDiscountValueExternal = ProductDiscountValueExternal;
export type TProductDiscountValueExternalDraft =
  ProductDiscountValueExternalDraft;

export type TProductDiscountValueExternalGraphql =
  TProductDiscountValueExternal & {
    __typename: 'ExternalDiscountValue';
  };
export type TProductDiscountValueExternalDraftGraphql = {
  external: Omit<TProductDiscountValueExternalDraft, 'type'>;
};

export type TProductDiscountValueExternalBuilder =
  TBuilder<TProductDiscountValueExternal>;
export type TProductDiscountValueExternalDraftBuilder =
  TBuilder<TProductDiscountValueExternalDraft>;

export type TCreateProductDiscountValueExternalBuilder =
  () => TProductDiscountValueExternalBuilder;
export type TCreateProductDiscountValueExternalDraftBuilder =
  () => TProductDiscountValueExternalDraftBuilder;
