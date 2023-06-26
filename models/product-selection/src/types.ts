import type {
  ProductSelection,
  ProductSelectionDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TProductSelection = ProductSelection;
export type TProductSelectionDraft = ProductSelectionDraft;

export type TProductSelectionGraphql = TProductSelection & {
  __typename: 'ProductSelection';
};
export type TProductSelectionDraftGraphql = TProductSelectionDraft;

export type TProductSelectionBuilder = TBuilder<TProductSelection>;
export type TProductSelectionDraftBuilder = TBuilder<TProductSelectionDraft>;
export type TCreateProductSelectionBuilder = () => TProductSelectionBuilder;
export type TCreateProductSelectionDraftBuilder =
  () => TProductSelectionDraftBuilder;
