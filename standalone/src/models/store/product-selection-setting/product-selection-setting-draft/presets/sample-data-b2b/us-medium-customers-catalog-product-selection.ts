import { KeyReferenceDraft } from '@/models/commons';
import {
  ProductSelectionDraft,
  type TProductSelectionDraft,
} from '@/models/product-selection';
import type { TProductSelectionSettingDraftBuilder } from '../../../types';
import ProductSelectionSettingDraft from '../../builder';

const usMediumCustomersCatalog = ProductSelectionDraft.presets.sampleDataB2B
  .usMediumCustomersCatalog()
  .build<TProductSelectionDraft>();

const usMediumCustomersCatalogProductSelectionSetting =
  (): TProductSelectionSettingDraftBuilder =>
    ProductSelectionSettingDraft()
      .productSelection(
        KeyReferenceDraft.presets
          .productSelection()
          .key(usMediumCustomersCatalog.key!)
      )
      .active(true);

export default usMediumCustomersCatalogProductSelectionSetting;
