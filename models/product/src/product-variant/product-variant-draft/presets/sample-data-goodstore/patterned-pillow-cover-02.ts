import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const patternedPillowCover02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('ADPC-7')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(1499))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(1499))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(1499))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Patterned%20Pillow%20Cov-8qpixl4F.jpeg'
        )
        .dimensions({ w: 6047, h: 4031 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Machine washable\n- Pillow not included',
        'de-DE':
          '- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten',
        'en-US': '- Machine washable\n- Pillow not included',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#0f0f0f', 'de-DE': '#0f0f0f', 'en-US': '#0f0f0f' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Black', 'de-DE': 'Schwarz', 'en-US': 'Black' }),
      AttributeDraft.random().name('new-arrival').value(false),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#000',
          label: { 'de-DE': 'Schwarz', 'en-GB': 'Black', 'en-US': 'Black' },
        }),
    ]);

export default patternedPillowCover02;