import { TBuilder } from '@/core';
import { KeyReferenceDraft } from '../../../../../commons';
import {
  ProductSelectionDraftGraphql,
  ProductSelectionDraftRest,
  type TProductSelectionDraft,
} from '../../../../../product/product-selection';
import type {
  TProductSelectionSettingDraftGraphql,
  TProductSelectionSettingDraftRest,
} from '../../../types';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from '../../builder';

const usMediumCustomersCatalogKey =
  ProductSelectionDraftRest.presets.sampleDataB2B
    .usMediumCustomersCatalog()
    .build<TProductSelectionDraft>().key;

export const restPreset = (): TBuilder<TProductSelectionSettingDraftRest> =>
  RestModelBuilder()
    .productSelection(
      KeyReferenceDraft.presets
        .productSelection()
        .key(usMediumCustomersCatalogKey!)
    )
    .active(true);

export const graphqlPreset =
  (): TBuilder<TProductSelectionSettingDraftGraphql> =>
    GraphqlModelBuilder()
      .productSelection(
        ProductSelectionDraftGraphql.presets.sampleDataB2B.usMediumCustomersCatalog()
      )
      .active(true);

export const compatPreset = (): TBuilder<
  TProductSelectionSettingDraftGraphql | TProductSelectionSettingDraftRest
> =>
  CompatModelBuilder()
    .productSelection(
      KeyReferenceDraft.presets
        .productSelection()
        .key(usMediumCustomersCatalogKey!)
    )
    .active(true);
