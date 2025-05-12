import type {
  ProductSelection,
  ProductSelectionDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '../../core';
import { TLocalizedStringGraphql } from '../commons';

//ProductSelectionDraft
export type TProductSelectionDraft = ProductSelectionDraft;
export type TProductSelectionDraftBuilder = TBuilder<TProductSelectionDraft>;
export type TCreateProductSelectionDraftBuilder =
  () => TProductSelectionDraftBuilder;
export type TProductSelectionDraftGraphql = Omit<
  TProductSelectionDraft,
  'name'
> & {
  name: TLocalizedStringGraphql;
};

//ProductSelection
export type TProductSelection = ProductSelection;
export type TProductSelectionBuilder = TBuilder<TProductSelection>;
export type TCreateProductSelectionBuilder = () => TProductSelectionBuilder;
export type TProductSelectionGraphql = TProductSelection & {
  __typename: 'ProductSelection';
};
