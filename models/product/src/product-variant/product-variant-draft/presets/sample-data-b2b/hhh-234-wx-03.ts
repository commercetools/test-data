import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

const hhh234Wx03 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .sku('hhh234-wx-green')
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hhh234-wx-green.webp'
        )
        .dimensions({ w: 1024, h: 1024 }),
    ])
    .attributes([
      AttributeDraft.random().name('capacity').value(20000),
      AttributeDraft.random()
        .name('color')
        .value({
          key: 'GREEN',
          label: {
            'de-DE': 'Grün',
            'it-IT': 'Verde',
            'nl-NL': 'Groen',
            'fr-FR': 'Vert',
            'en-AU': 'Green',
            'es-ES': 'Verde',
            'en-GB': 'Green',
            'en-NZ': 'Green',
            'pt-PT': 'Verde',
            'en-US': 'Green',
          },
        }),
      AttributeDraft.random().name('iso45001').value(true),
      AttributeDraft.random().name('mobility').value({
        key: 'fixed',
        label: 'Fixed',
      }),
    ]);

export default hhh234Wx03;
