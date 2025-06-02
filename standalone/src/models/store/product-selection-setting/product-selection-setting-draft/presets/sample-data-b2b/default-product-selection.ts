import { TBuilder } from '@/core';
import { KeyReferenceDraft } from '@/models/commons';
import {
  ProductSelectionDraftGraphql,
  ProductSelectionDraftRest,
} from '@/models/product/product-selection';
import type {
  TProductSelectionSettingDraftGraphql,
  TProductSelectionSettingDraftRest,
} from '../../../types';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from '../../builder';

const defaultProductSelectionKey =
  ProductSelectionDraftRest.presets.sampleDataB2B
    .defaultProductSelection()
    .build().key;

export const restPreset = (): TBuilder<TProductSelectionSettingDraftRest> =>
  RestModelBuilder()
    .productSelection(
      KeyReferenceDraft.presets
        .productSelection()
        .key(defaultProductSelectionKey!)
    )
    .active(true);

export const graphqlPreset =
  (): TBuilder<TProductSelectionSettingDraftGraphql> =>
    GraphqlModelBuilder()
      .productSelection(
        ProductSelectionDraftGraphql.presets.sampleDataB2B.defaultProductSelection()
      )
      .active(true);

export const compatPreset = (): TBuilder<
  TProductSelectionSettingDraftRest | TProductSelectionSettingDraftGraphql
> =>
  CompatModelBuilder()
    .productSelection(
      KeyReferenceDraft.presets
        .productSelection()
        .key(defaultProductSelectionKey!)
    )
    .active(true);
