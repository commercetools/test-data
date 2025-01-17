import type {
  ProductTailoring as ProductTailoringSDK,
  ProductTailoringDraft as ProductTailoringDraftSDK,
} from '@commercetools/platform-sdk';
import type { TReferenceGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TProductTailoring = ProductTailoringSDK;

export type TProductTailoringRest = TProductTailoring;

export type TProductTailoringGraphql = Omit<
  TProductTailoring,
  'product' | 'store'
> & {
  productRef: TReferenceGraphql;
  storeRef: TReferenceGraphql;
  __typename: 'ProductTailoring';
};

export type TProductTailoringDraft = ProductTailoringDraftSDK;

export type TProductTailoringBuilder = TBuilder<TProductTailoring>;
export type TCreateProductTailoringBuilder = () => TProductTailoringBuilder;

export type TProductTailoringDraftBuilder = TBuilder<TProductTailoringDraft>;
export type TCreateProductTailoringDraftBuilder =
  () => TProductTailoringDraftBuilder;
