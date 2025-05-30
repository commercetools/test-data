import { TBuilder } from '@/core';
import { KeyReferenceDraft } from '../../../../../commons';
import {
  ProductSelectionDraft,
  type TProductSelectionDraft,
} from '../../../../../product/product-selection';
import type { TProductSelectionSettingDraft } from '../../../types';
import ProductSelectionSettingDraft from '../../builder';

const usMediumCustomersCatalog = ProductSelectionDraft.presets.sampleDataB2B
  .usMediumCustomersCatalog()
  .build<TProductSelectionDraft>();

const usMediumCustomersCatalogProductSelectionSetting =
  (): TBuilder<TProductSelectionSettingDraft> =>
    ProductSelectionSettingDraft()
      .productSelection(
        KeyReferenceDraft.presets
          .productSelection()
          .key(usMediumCustomersCatalog.key!)
      )
      .active(true);

export default usMediumCustomersCatalogProductSelectionSetting;
