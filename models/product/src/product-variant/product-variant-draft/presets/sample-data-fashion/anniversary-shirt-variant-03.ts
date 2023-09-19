import { AttributeDraft } from '../../../../attribute';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

// rename master variants to variant01, etc...
const anniversaryShirtVariant03 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets.empty().attributes([
    AttributeDraft.random().name('size').value({
      key: 'Large',
      label: 'Large',
    }),
  ]);

export default anniversaryShirtVariant03;
