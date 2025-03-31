import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const iii567Yz02 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .sku('iii567-yz-blue')
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/iii567-yz-blue.webp'
        )
        .dimensions({ w: 1024, h: 1024 }),
    ])
    .attributes([
      AttributeDraft.random().name('capacity').value(25000),
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

export default iii567Yz02;
