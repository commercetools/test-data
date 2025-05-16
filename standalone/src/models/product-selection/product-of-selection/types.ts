import type { TBuilder } from '@/core';
import { TCtpProductOfSelection } from '@/graphql-types';

export type TProductOfSelectionGraphql = TCtpProductOfSelection;

export type TCreateProductOfSelectionBuilder<
  TProductOfSelectionModel extends TCtpProductOfSelection,
> = () => TBuilder<TProductOfSelectionModel>;
