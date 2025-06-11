import { TBuilder } from '@/core';
import { KeyReferenceDraft } from '../../../../../commons';
import {
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

const populatePreset = <
  TModel extends
    | TProductSelectionSettingDraftRest
    | TProductSelectionSettingDraftGraphql,
>(
  builder: TBuilder<TModel>
) => {
  return builder
    .productSelection(
      KeyReferenceDraft.presets
        .productSelection()
        .key(usMediumCustomersCatalogKey!)
    )
    .active(true);
};

export const restPreset = (): TBuilder<TProductSelectionSettingDraftRest> =>
  populatePreset(RestModelBuilder());

export const graphqlPreset =
  (): TBuilder<TProductSelectionSettingDraftGraphql> =>
    populatePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<
  TProductSelectionSettingDraftRest | TProductSelectionSettingDraftGraphql
> => populatePreset(CompatModelBuilder());
