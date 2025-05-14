import { TBuilder } from '../../../../../../core';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const ddd890Op01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .sku('ddd890-op-red')
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ddd890-op-red.webp'
        )
        .dimensions({ w: 1024, h: 1024 }),
    ])
    .attributes([
      AttributeDraft.random().name('capacity').value(12000),
      AttributeDraft.random()
        .name('color')
        .value({
          key: 'RED',
          label: {
            'de-DE': 'Rot',
            'it-IT': 'Rosso',
            'nl-NL': 'Rood',
            'fr-FR': 'Rouge',
            'en-AU': 'Red',
            'es-ES': 'Rojo',
            'en-GB': 'Red',
            'en-NZ': 'Red',
            'pt-PT': 'Vermelho',
            'en-US': 'Red',
          },
        }),
      AttributeDraft.random().name('iso45001').value(true),
      AttributeDraft.random().name('mobility').value({
        key: 'tracked',
        label: 'Tracked',
      }),
    ]);

export default ddd890Op01;
