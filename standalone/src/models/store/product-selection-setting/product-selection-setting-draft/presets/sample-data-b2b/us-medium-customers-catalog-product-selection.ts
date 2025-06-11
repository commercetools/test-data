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
} from '../../builders';

const usMediumCustomersCatalogKey =
  ProductSelectionDraftRest.presets.sampleDataB2B
    .usMediumCustomersCatalog()
    .build<TProductSelectionDraft>().key;

export const usMediumCustomersCatalogRest =
  (): TBuilder<TProductSelectionSettingDraftRest> =>
    RestModelBuilder()
      .productSelection(
        KeyReferenceDraft.presets
          .productSelection()
          .key(usMediumCustomersCatalogKey!)
      )
      .active(true);

export const usMediumCustomersCatalogGraphql =
  (): TBuilder<TProductSelectionSettingDraftGraphql> =>
    GraphqlModelBuilder()
      .productSelection(
        KeyReferenceDraft.presets
          .productSelection()
          .key(usMediumCustomersCatalogKey!)
      )
      .active(true);

/**
 * @deprecated Use `usMediumCustomersCatalogRest` or `usMediumCustomersCatalogGraphql` instead
 */
export const usMediumCustomersCatalogPreset = (): TBuilder<
  TProductSelectionSettingDraftGraphql | TProductSelectionSettingDraftRest
> =>
  CompatModelBuilder()
    .productSelection(
      KeyReferenceDraft.presets
        .productSelection()
        .key(usMediumCustomersCatalogKey!)
    )
    .active(true);
