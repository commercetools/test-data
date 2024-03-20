import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const jjj890Op03 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('jjj890-op-green')
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/jjj890-op-green.webp'
        )
        .dimensions({ w: 1024, h: 1024 }),
    ])
    .attributes([
      AttributeDraft.random().name('capacity').value(18000),
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

export default jjj890Op03;
