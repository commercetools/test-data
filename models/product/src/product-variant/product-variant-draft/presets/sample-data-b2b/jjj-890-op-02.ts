import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const jjj890Op02 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .sku('jjj890-op-blue')
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/jjj890-op-blue.webp'
        )
        .dimensions({ w: 1024, h: 1024 }),
    ])
    .attributes([
      AttributeDraft.random().name('capacity').value(18000),
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
      AttributeDraft.random().name('iso45001').value(true),
      AttributeDraft.random().name('mobility').value({
        key: 'fixed',
        label: 'Fixed',
      }),
    ]);

export default jjj890Op02;
