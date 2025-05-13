import { KeyReferenceDraft } from '../../../../../commons';
import { ProductSelectionDraft } from '../../../../../product-selection';
import type { TProductSelectionDraft } from '../../../../../product-selection/types';
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
