import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const ivoryLoungeChair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('ILC-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(29900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(29900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(29900))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_425997376-rgouAPnE.jpeg'
        )
        .dimensions({ w: 5500, h: 4400 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_433015214-W7glmC_k.jpeg'
        )
        .dimensions({ w: 3375, h: 4500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_417425585-8KQEao5y.jpeg'
        )
        .dimensions({ w: 3750, h: 5000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Dry clean only\n- Assembly included in delivery',
        'en-US': '- Dry clean only\n- Assembly included in delivery',
        'de-DE':
          '- Nur chemische Reinigung\n- Montage im Lieferumfang enthalten',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          "This arm chair is a bold and funky piece of furniture that takes its inspiration from the eclectic styles of the 1970s. The chair features a round, circular shape, with a low backrest and generously padded seat that provide comfortable seating for extended periods of time.  The arms of the chair are wide and round, creating a comfortable and supportive space for you to rest your arms while lounging.   Overall, a 70's inspired round arm chair is a playful and fun piece of furniture that can add a touch of retro flair to any room. Its round shape and generous padding, make it a comfortable and inviting spot for lounging and relaxation.",
        'en-US':
          "This arm chair is a bold and funky piece of furniture that takes its inspiration from the eclectic styles of the 1970s. The chair features a round, circular shape, with a low backrest and generously padded seat that provide comfortable seating for extended periods of time.  The arms of the chair are wide and round, creating a comfortable and supportive space for you to rest your arms while lounging.   Overall, a 70's inspired round arm chair is a playful and fun piece of furniture that can add a touch of retro flair to any room. Its round shape and generous padding, make it a comfortable and inviting spot for lounging and relaxation.",
        'de-DE':
          'Dieser Sessel ist ein kühnes und flippiges Möbelstück, das von den eklektischen Stilen der 1970er Jahre inspiriert wurde. Der Stuhl hat eine runde, kreisförmige Form mit einer niedrigen Rückenlehne und einer großzügig gepolsterten Sitzfläche, die ein bequemes Sitzen über einen längeren Zeitraum hinweg ermöglicht. Die Armlehnen des Stuhls sind breit und rund und schaffen eine bequeme und stützende Ablagefläche für Ihre Arme. Insgesamt ist ein von den 70er Jahren inspirierter runder Sessel ein verspieltes und lustiges Möbelstück, das jedem Raum einen Hauch von Retro-Flair verleihen kann. Seine runde Form und die großzügige Polsterung machen ihn zu einem komfortablen und einladenden Ort zum Faulenzen und Entspannen.',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#FFF', 'de-DE': '#FFF', 'en-US': '#FFF' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Ivory', 'de-DE': 'Elfenbein', 'en-US': 'Ivory' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFF',
          label: { 'de-DE': 'Weiss', 'en-GB': 'White', 'en-US': 'White' },
        }),
    ]);

export default ivoryLoungeChair01;
