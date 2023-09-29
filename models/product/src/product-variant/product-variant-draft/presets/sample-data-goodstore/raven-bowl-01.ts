import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const ravenBowl01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('RB-093')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(299))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(299))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Raven%20Bowl-WdQrD_t6.jpeg'
        )
        .dimensions({ w: 4232, h: 2904 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Includes 1 bowl',
          'en-US': '- Includes 1 bowl',
          'de-DE': '- Enthält 1 Schüssel',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'This bowl is a dish designed to serve soup and other liquid-based foods. It is a square-shaped bowl with four straight sides and a flat bottom, creating a modern and contemporary look for dining.  Overall, a square soup bowl is a functional and stylish choice for serving soup and other liquid-based foods. Its unique shape and contemporary design make it a popular choice for those who appreciate modern aesthetics and practicality.',
          'en-US':
            'This bowl is a dish designed to serve soup and other liquid-based foods. It is a square-shaped bowl with four straight sides and a flat bottom, creating a modern and contemporary look for dining.  Overall, a square soup bowl is a functional and stylish choice for serving soup and other liquid-based foods. Its unique shape and contemporary design make it a popular choice for those who appreciate modern aesthetics and practicality.',
          'de-DE':
            'Die Schüssel >Raven< wurde zum Servieren von Suppen und anderer Flüssigspeisen designt. Die quadratische Form aus vier geraden Seiten und einem flachen Boden verleiht dem Suppentellerl einen modernen und zeitgemäßen Look.  Durch die einzigartige Form und das zeitgemäße Design ist >Raven< eine beliebte Wahl für all diejenigen, die Ästhetik und Praktikabilität auf ihrem Esstisch schätzen.',
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#FFF', 'de-DE': '#FFF', 'en-US': '#FFF' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'White', 'de-DE': 'Weiß', 'en-US': 'White' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFF',
          label: { 'de-DE': 'Weiss', 'en-GB': 'White', 'en-US': 'White' },
        }),
    ]);

export default ravenBowl01;
