import { TBuilder } from '../../../../../../core';
import { AttributeDraft } from '../../../../attribute';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const hh456St03 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .sku('hh456-st-2023')
    .images([])
    .attributes([
      AttributeDraft.random().name('capacity').value(700),
      AttributeDraft.random().name('model').value(2023),
      AttributeDraft.random().name('iso45001').value(true),
      AttributeDraft.random().name('mobility').value({
        key: 'wheeled',
        label: 'Wheeled',
      }),
    ]);

export default hh456St03;
