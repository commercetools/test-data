import * as ProductVariantDraft from '../..';
import { AttributeDraft } from '../../../../attribute/';
import { TProductVariantDraftBuilder } from '../../../types';

const anniversaryShirtVariant01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .prices([])
    .images([])
    .attributes([
      AttributeDraft.random().name('size').value({
        key: 'Small',
        label: 'Small',
      }),
    ])
    .assets([]);

export default anniversaryShirtVariant01;
