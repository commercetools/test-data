import type {
  ProductSelection,
  ProductSelectionDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

//ProductSelectionDraft
export type TProductSelectionDraft = ProductSelectionDraft;
export type TProductSelectionDraftBuilder = TBuilder<TProductSelectionDraft>;
export type TCreateProductSelectionDraftBuilder =
  () => TProductSelectionDraftBuilder;
// ProductSelectionDraft/ProductSelectionInput does not exist in a graphql format

//ProductSelection
export type TProductSelection = ProductSelection;
export type TProductSelectionBuilder = TBuilder<TProductSelection>;
export type TCreateProductSelectionBuilder = () => TProductSelectionBuilder;
export type TProductSelectionGraphql = TProductSelection & {
  __typename: 'ProductSelection';
};
