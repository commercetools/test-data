import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const juteRug01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('JAR-08')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(39900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(39900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(39900))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_449539663-lSkaNtxb.jpeg'
        )
        .dimensions({ w: 7600, h: 5223 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_447839385-wEisIxmE.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_405760748-jH1fNEXu.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- 10ft x 12ft',
        'en-US': '- 10ft x 12ft',
        'de-DE': '- 10 Fuß x 12 Fuß',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A jute area rug is a type of rug made from natural fibers derived from the jute plant. Jute is a long, soft, and shiny vegetable fiber that is spun into strong threads and then woven into textiles. Jute rugs are known for their durability and natural appearance, making them a popular choice for those who want to bring a touch of the outdoors into their homes.  Because jute is a natural fiber, it is eco-friendly and sustainable. However, it can be prone to staining and water damage, so jute area rugs should be used in low-traffic areas or rooms that do not see a lot of moisture. They are often used in living rooms, bedrooms, and other spaces where a natural, earthy look is desired.  Overall, a jute area rug is a beautiful and eco-friendly addition to any home. Its natural fibers and earthy appearance make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.',
        'en-US':
          'A jute area rug is a type of rug made from natural fibers derived from the jute plant. Jute is a long, soft, and shiny vegetable fiber that is spun into strong threads and then woven into textiles. Jute rugs are known for their durability and natural appearance, making them a popular choice for those who want to bring a touch of the outdoors into their homes.  Because jute is a natural fiber, it is eco-friendly and sustainable. However, it can be prone to staining and water damage, so jute area rugs should be used in low-traffic areas or rooms that do not see a lot of moisture. They are often used in living rooms, bedrooms, and other spaces where a natural, earthy look is desired.  Overall, a jute area rug is a beautiful and eco-friendly addition to any home. Its natural fibers and earthy appearance make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.',
        'de-DE':
          'Ein Juteteppich ist eine Art Teppich aus Naturfasern, die aus der Jutepflanze gewonnen werden. Jute ist eine lange, weiche und glänzende Pflanzenfaser, die zu starken Fäden gesponnen und dann zu Textilien gewebt wird. Juteteppiche sind bekannt für ihre Langlebigkeit und ihr natürliches Aussehen, was sie zu einer beliebten Wahl für diejenigen macht, die einen Hauch von Natur in ihr Zuhause bringen möchten. Da Jute eine Naturfaser ist, ist sie umweltfreundlich und nachhaltig. Sie kann jedoch anfällig für Flecken und Wasserschäden sein, daher sollten Juteteppiche in wenig frequentierten Bereichen oder Räumen verwendet werden, die nicht viel Feuchtigkeit ausgesetzt sind. Sie werden oft in Wohnzimmern, Schlafzimmern und anderen Räumen verwendet, in denen ein natürlicher, erdiger Look gewünscht wird. Insgesamt ist ein Juteteppich eine schöne und umweltfreundliche Ergänzung für jedes Zuhause. Seine natürlichen Fasern und sein erdiges Aussehen machen ihn zu einer beliebten Wahl für diejenigen, die eine warme und einladende Atmosphäre in ihrem Wohnraum schaffen möchten.',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Jute', 'de-DE': 'Jute', 'en-US': 'Jute' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#EEDA99', 'en-US': '#EEDA99', 'de-DE': '#EEDA99' }),
    ]);

export default juteRug01;
