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

export const populatePreset = <
  TModel extends
    | TProductSelectionSettingDraftRest
    | TProductSelectionSettingDraftGraphql,
>(
  builder: TBuilder<TModel>
) =>
  builder
    .productSelection(
      KeyReferenceDraft.presets
        .productSelection()
        .key(defaultProductSelectionKey!)
    )
    .active(true);

export const restPreset = (): TBuilder<TProductSelectionSettingDraftRest> =>
  populatePreset(RestModelBuilder());

export const graphqlPreset =
  (): TBuilder<TProductSelectionSettingDraftGraphql> =>
    populatePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<
  TProductSelectionSettingDraftRest | TProductSelectionSettingDraftGraphql
> => populatePreset(CompatModelBuilder());
