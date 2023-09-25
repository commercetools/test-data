import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const modernUpholsteredQueenBed01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MUQB-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(259900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(259900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(259900))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_332198625-HWsyg51y.jpeg'
        )
        .dimensions({ w: 6000, h: 6000 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color')
        .value({ 'en-US': 'white', 'en-GB': 'white', 'de-DE': 'white' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-US': 'White', 'en-GB': 'White', 'de-DE': 'White' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-US': 'black', 'en-GB': 'black', 'de-DE': 'black' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-US': 'Ebony', 'en-GB': 'Ebony', 'de-DE': 'Ebony' }),
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-US':
            '- Cotton Upholstery \n- Standard Queen size\n- Assembly on site',
          'en-GB':
            '- Cotton Upholstery \n- Standard Queen size\n- Assembly on site',
          'de-DE':
            '- Cotton Upholstery \n- Standard Queen size\n- Assembly on site',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            "A queen bed upholstered with velvet fabric and brass nails and tufting is a luxurious and elegant piece of furniture that can add a touch of glamour and sophistication to any bedroom. The bed features a wooden frame that is covered with soft and plush velvet upholstery.  The headboard of the bed is the focal point of the design, featuring a tufted or quilted pattern that creates a plush and inviting surface to lean against. The tufting is accentuated with brass nailhead trim, which adds a touch of metallic shine and texture to the design.  The footboard and side rails of the bed are also upholstered in the same velvet fabric and trimmed with brass nailheads, creating a cohesive and stylish look. The legs of the bed are wood.  The queen size of the bed provides ample space for a comfortable night's sleep, while the luxurious velvet upholstery and brass accents add an element of glamour and sophistication to the room. The bed can be paired with a range of bedding and accessories, such as plush pillows and soft blankets, to create a cozy and inviting atmosphere.  Overall, a queen bed upholstered with velvet fabric and brass nails and tufting is a stunning and stylish piece of furniture that can transform any bedroom into a luxurious and elegant space. Its plush upholstery, intricate tufting, and metallic accents make it a standout piece that is sure to impress and delight.",
          'en-US':
            "A queen bed upholstered with velvet fabric and brass nails and tufting is a luxurious and elegant piece of furniture that can add a touch of glamour and sophistication to any bedroom. The bed features a wooden frame that is covered with soft and plush velvet upholstery.  The headboard of the bed is the focal point of the design, featuring a tufted or quilted pattern that creates a plush and inviting surface to lean against. The tufting is accentuated with brass nailhead trim, which adds a touch of metallic shine and texture to the design.  The footboard and side rails of the bed are also upholstered in the same velvet fabric and trimmed with brass nailheads, creating a cohesive and stylish look. The legs of the bed are wood.  The queen size of the bed provides ample space for a comfortable night's sleep, while the luxurious velvet upholstery and brass accents add an element of glamour and sophistication to the room. The bed can be paired with a range of bedding and accessories, such as plush pillows and soft blankets, to create a cozy and inviting atmosphere.  Overall, a queen bed upholstered with velvet fabric and brass nails and tufting is a stunning and stylish piece of furniture that can transform any bedroom into a luxurious and elegant space. Its plush upholstery, intricate tufting, and metallic accents make it a standout piece that is sure to impress and delight.",
          'de-DE':
            'Ein Queensize-Bett, das mit Samtstoff und Messingnägeln und Tufting bezogen ist, ist ein luxuriöses und elegantes Möbelstück, das jedem Schlafzimmer einen Hauch von Glamour und Raffinesse verleihen kann. Das Bett verfügt über einen Holzrahmen, der mit einer weichen und weichen Samtpolsterung bezogen ist.  Das Kopfteil des Bettes ist der Mittelpunkt des Designs und weist ein getuftetes oder gestepptes Muster auf, das eine weiche und einladende Oberfläche zum Anlehnen schafft. Das Tufting wird durch eine Nagelkopfverzierung aus Messing akzentuiert, die dem Design einen Hauch von metallischem Glanz und Textur verleiht.  Das Fußteil und die Seitengitter des Bettes sind ebenfalls mit dem gleichen Samtstoff bezogen und mit Messing-Nagelköpfen besetzt, wodurch ein zusammenhängender und stilvoller Look entsteht. Die Beine des Bettes sind aus Holz.  Das Queensize-Bett bietet viel Platz für eine angenehme Nachtruhe, während die luxuriösen Samtpolster und Messingakzente dem Raum ein Element von Glamour und Raffinesse verleihen. Das Bett kann mit einer Reihe von Bettwaren und Accessoires wie Plüschkissen und weichen Decken kombiniert werden, um eine gemütliche und einladende Atmosphäre zu schaffen.  Insgesamt ist ein Queensize-Bett, das mit Samtstoff und Messingnägeln und Tufting bezogen ist, ein atemberaubendes und stilvolles Möbelstück, das jedes Schlafzimmer in einen luxuriösen und eleganten Raum verwandeln kann. Seine Plüschpolsterung, das komplizierte Tufting und die metallischen Akzente machen es zu einem herausragenden Stück, das Sie beeindrucken und begeistern wird.',
        }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFF',
          label: { 'de-DE': 'Weiss', 'en-GB': 'White', 'en-US': 'White' },
        }),
    ]);

export default modernUpholsteredQueenBed01;
