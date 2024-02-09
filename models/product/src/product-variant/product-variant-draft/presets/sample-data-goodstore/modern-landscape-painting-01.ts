import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const modernLandscapePainting01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MLP-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(5299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(5299))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(5299))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Landscape_Painting-1.1.jpeg'
        )
        .dimensions({ w: 5313, h: 5355 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Oil on canvas\n- Frame not included\n- 3ft by 4ft',
        'de-DE':
          '- Öl auf Leinwand\n- Rahmen nicht im Lieferumfang enthalten\n- 3 Fuß mal 4 Fuß',
        'en-US': '- Oil on canvas\n- Frame not included\n- 3ft by 4ft',
      }),
    ]);

export default modernLandscapePainting01;
