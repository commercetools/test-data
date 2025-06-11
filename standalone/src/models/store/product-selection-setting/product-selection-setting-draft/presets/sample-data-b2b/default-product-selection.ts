import { TBuilder } from '@/core';
import { KeyReferenceDraft } from '@/models/commons';
import { ProductSelectionDraftRest } from '@/models/product/product-selection';
import type {
  TProductSelectionSettingDraftGraphql,
  TProductSelectionSettingDraftRest,
} from '../../../types';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from '../../builders';

const defaultProductSelectionKey =
  ProductSelectionDraftRest.presets.sampleDataB2B
    .defaultProductSelection()
    .build().key;

export const defaultProductSelectionRest =
  (): TBuilder<TProductSelectionSettingDraftRest> =>
    RestModelBuilder()
      .productSelection(
        KeyReferenceDraft.presets
          .productSelection()
          .key(defaultProductSelectionKey!)
      )
      .active(true);

export const defaultProductSelectionGraphql =
  (): TBuilder<TProductSelectionSettingDraftGraphql> =>
    GraphqlModelBuilder()
      .productSelection(
        KeyReferenceDraft.presets
          .productSelection()
          .key(defaultProductSelectionKey!)
      )
      .active(true);

/**
 * @deprecated Use `defaultProductSelectionRest` or `defaultProductSelectionGraphql` instead
 */
export const defaultProductSelection = (): TBuilder<
  TProductSelectionSettingDraftRest | TProductSelectionSettingDraftGraphql
> =>
  CompatModelBuilder()
    .productSelection(
      KeyReferenceDraft.presets
        .productSelection()
        .key(defaultProductSelectionKey!)
    )
    .active(true);
