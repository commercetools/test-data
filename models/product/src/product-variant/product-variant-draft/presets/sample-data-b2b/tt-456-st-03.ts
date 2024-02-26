import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const tt456St03 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('tt456-st-green')
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/tt456-st-green.webp'
        )
        .dimensions({ w: 1024, h: 1024 }),
    ])
    .attributes([
      AttributeDraft.random().name('capacity').value(700),
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
        key: 'tracked',
        label: 'Tracked',
      }),
    ]);

export default tt456St03;
