import * as ProductVariantDraft from '../..';
import { AttributeDraft } from '../../../../attribute/';
import { TProductVariantDraftBuilder } from '../../../types';

// rename master variants to variant01, etc...
const anniversaryShirtVariant03 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .prices([])
    .images([])
    .attributes([
      AttributeDraft.random().name('size').value({
        key: 'Large',
        label: 'Large',
      }),
    ])
    .assets([]);

export default anniversaryShirtVariant03;