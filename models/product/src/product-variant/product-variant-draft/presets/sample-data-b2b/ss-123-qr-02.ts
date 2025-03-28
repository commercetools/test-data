import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

const ss123Qr02 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .sku('ss123-qr-blue')
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ss123-qr-blue.webp'
        )
        .dimensions({ w: 1024, h: 1024 }),
    ])
    .attributes([
      AttributeDraft.random().name('capacity').value(800),
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
        key: 'fixed',
        label: 'Fixed',
      }),
    ]);

export default ss123Qr02;
