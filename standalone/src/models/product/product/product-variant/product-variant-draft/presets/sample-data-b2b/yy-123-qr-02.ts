import { TBuilder } from '@/core';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const yy123Qr02 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .sku('yy123-qr-blue')
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/yy123-qr-blue.webp'
        )
        .dimensions({ w: 1024, h: 1024 }),
    ])
    .attributes([
      AttributeDraft.random().name('capacity').value(12000),
      AttributeDraft.random()
        .name('color')
        .value({
          key: 'BLUE',
          label: {
            'de-DE': 'Blau',
            'it-IT': 'Blu',
            'nl-NL': 'Blauw',
            'fr-FR': 'Bleu',
            'en-AU': 'Blue',
            'es-ES': 'Azul',
            'en-GB': 'Blue',
            'en-NZ': 'Blue',
            'pt-PT': 'Azul',
            'en-US': 'Blue',
          },
        }),
      AttributeDraft.random().name('iso45001').value(false),
      AttributeDraft.random().name('mobility').value({
        key: 'wheeled',
        label: 'Wheeled',
      }),
    ]);

export default yy123Qr02;
