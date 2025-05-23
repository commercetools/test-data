import { KeyReferenceDraft } from '../../../../../commons';
import {
  ProductSelectionDraft,
  type TProductSelectionDraft,
} from '../../../../../product/product-selection';
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
