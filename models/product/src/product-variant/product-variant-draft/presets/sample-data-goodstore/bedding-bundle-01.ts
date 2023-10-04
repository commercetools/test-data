import { ProductVariantDraft } from '../../..';
import { TProductDraft } from '../../../../';
import { AttributeDraft } from '../../../../attribute';
import benPillowCover from '../../../../product/product-draft/presets/sample-data-goodstore/ben-pillow-cover';
import modernThreeSeaterSofa from '../../../../product/product-draft/presets/sample-data-goodstore/modern-three-seater-sofa';
import type { TProductVariantDraftBuilder } from '../../../types';

const beddingBundle01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('DCC-03')
    .key('bed-bundle-1')
    .prices([])
    .images([])
    .attributes([
      AttributeDraft.random()
        .name('product-ref')
        .value([
          {
            typeId: 'product',
            key: benPillowCover().build<TProductDraft>().key,
          },
          {
            typeId: 'product',
            key: modernThreeSeaterSofa().build<TProductDraft>().key,
          },
        ]),
    ]);

export default beddingBundle01;
