import { KeyReferenceDraft } from '../../../../../commons';
import { ProductSelectionDraft } from '../../../../../product-selection';
import type { TProductSelectionDraft } from '../../../../../product-selection/types';
import type { TProductSelectionSettingDraftBuilder } from '../../../types';
import ProductSelectionSettingDraft from '../../builder';

const defaultProductSelection = ProductSelectionDraft.presets.sampleDataB2B
  .defaultProductSelection()
  .build<TProductSelectionDraft>();

const defaultProductSelectionSetting =
  (): TProductSelectionSettingDraftBuilder =>
    ProductSelectionSettingDraft()
      .productSelection(
        KeyReferenceDraft.presets
          .productSelection()
          .key(defaultProductSelection.key!)
      )
      .active(true);

export default defaultProductSelectionSetting;
