import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

const yy123Qr01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .sku('yy123-qr-red')
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/yy123-qr-red.webp'
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
      AttributeDraft.random().name('iso45001').value(false),
      AttributeDraft.random().name('mobility').value({
        key: 'wheeled',
        label: 'Wheeled',
      }),
    ]);

export default yy123Qr01;
