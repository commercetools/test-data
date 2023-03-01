import type { TBuilder } from '@commercetools-test-data/core';
import { ProductDraft } from '@commercetools/platform-sdk';

export type TProductDraft = ProductDraft;

export type TProductDraftGraphql = TProductDraft & {
  __typename: 'MoneyInput';
};

export type TProductDraftBuilder = TBuilder<TProductDraft>;
export type TCreateProductDraftBuilder = () => TProductDraftBuilder;
