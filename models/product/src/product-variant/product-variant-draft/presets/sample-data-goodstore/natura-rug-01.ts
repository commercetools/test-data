import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const naturaRug01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('NR-09')
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
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Natura%20Rug-DmA5URbn.jpeg'
        )
        .dimensions({ w: 8000, h: 4000 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- 6ft x 6ft',
          'en-US': '- 6ft x 6ft',
          'de-DE': '- 6 Fuß x 6 Fuß',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.  These rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.  The texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.  The construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.  A round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.  Overall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.',
          'en-US':
            'A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.  These rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.  The texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.  The construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.  A round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.  Overall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.',
          'de-DE':
            'Ein runder Teppich aus Naturfasern ist ein kreisförmiger Teppich, der aus Materialien hergestellt wird, die in der Natur vorkommen. Zu den Naturfasern, die üblicherweise für diese Art von Teppichen verwendet werden, gehören Jute, Sisal, Seegras und Bambus. Durch die Verwendung natürlicher Materialien haben diese Teppiche einen rustikalen und organischen Charakter, der einem Raum Wärme und Struktur verleihen kann. Die neutralen Farbtöne dieser Fasern machen sie außerdem vielseitig einsetzbar und passen zu einer Reihe von Einrichtungsstilen, von Bohème über Küsten- bis hin zu Landhausstil. Die Textur und Dicke eines runden Teppichs aus Naturfasern kann je nach verwendetem Material variieren. Jute und Sisal haben beispielsweise eine rauere Struktur und einen dünneren Flor, während Seegras und Bambus eine glattere Textur und einen dickeren Flor haben.  Die Herstellung dieser Teppiche erfolgt häufig in Handarbeit, was zu ihrer Einzigartigkeit beiträgt. Auch die Web- oder Flechttechnik, mit der der Teppich hergestellt wird, kann das Design optisch aufwerten, z. B. durch ein Fischgräten- oder Chevron-Muster.  Ein runder Teppich aus Naturfasern kann in einer Vielzahl von Räumen verwendet werden, vom Wohnzimmer über das Schlafzimmer bis zum Essbereich. Besonders beliebt sind sie im Bohème- und Küsten-Stil, wo sie dem Raum eine entspannte und lockere Atmosphäre verleihen können. Insgesamt ist ein runder Teppich aus Naturfasern eine stilvolle und umweltfreundliche Wahl für alle, die ihrer Einrichtung Textur und Wärme verleihen möchten.',
        }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
      AttributeDraft.random()
        .name('color')
        .value({
          'en-GB': '#F7ECD9 ',
          'de-DE': '#F7ECD9 ',
          'en-US': '#F7ECD9 ',
        }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Beige', 'de-DE': 'Beige', 'en-US': 'Beige' }),
    ]);

export default naturaRug01;
