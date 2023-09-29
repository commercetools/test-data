import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const amaliaRug01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('AMR-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(13999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(13999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(13999))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Amalia%20Rug-05x9M71D.jpeg'
        )
        .dimensions({ w: 4500, h: 3000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- 6ft x 6ft',
        'en-US': '- 6ft x 6ft',
        'de-DE': '- 180cm x 180cm',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A round plush accent rug is designed to be soft and comfortable underfoot, with a thick and dense pile that provides a plush feel. The fibers are densely packed together, giving the rug a lush and luxurious feel. The rug is a great decorative accent in a bedroom, living room, or other area where a small touch of softness and comfort is desired.  Because of their small size, round plush accent rugs are easy to move and reposition, making them a versatile addition to any home. They are also easy to clean and maintain, making them a practical choice for high-traffic areas.  Overall, a round plush accent rug is a cozy and inviting addition to any room. Its soft texture and luxurious feel make it a popular choice for those who want to add a touch of comfort and style to their living space.',
        'en-US':
          'A round plush accent rug is designed to be soft and comfortable underfoot, with a thick and dense pile that provides a plush feel. The fibers are densely packed together, giving the rug a lush and luxurious feel. The rug is a great decorative accent in a bedroom, living room, or other area where a small touch of softness and comfort is desired.  Because of their small size, round plush accent rugs are easy to move and reposition, making them a versatile addition to any home. They are also easy to clean and maintain, making them a practical choice for high-traffic areas.  Overall, a round plush accent rug is a cozy and inviting addition to any room. Its soft texture and luxurious feel make it a popular choice for those who want to add a touch of comfort and style to their living space.',
        'de-DE':
          'Dieser runde Plüsch-Akzent-Teppich weich und bequem. Der dichte Flor vermittelt ein weiches Gefühl. Die Fasern sind dicht gepackt und verleihen dem Teppich ein üppiges und luxuriöses Gefühl. Der Teppich ist ein großartiger dekorativer Akzent in einem Schlafzimmer, Wohnzimmer oder anderen Bereichen, in denen ein kleiner Hauch von Weichheit und Komfort erwünscht ist.  Aufgrund ihrer geringen Größe lassen sich runde Plüschteppiche leicht bewegen und neu positionieren, was sie zu einer vielseitigen Ergänzung für jedes Zuhause macht. Sie sind außerdem leicht zu reinigen und zu pflegen, was sie zu einer praktischen Wahl für stark frequentierte Bereiche macht.  Insgesamt ist ein runder Teppich mit Plüschakzenten eine gemütliche und einladende Ergänzung für jeden Raum. Seine weiche Textur und luxuriöse Haptik machen es zu einer beliebten Wahl für diejenigen, die ihrem Wohnraum einen Hauch von Komfort und Stil verleihen möchten.',
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

export default amaliaRug01;
