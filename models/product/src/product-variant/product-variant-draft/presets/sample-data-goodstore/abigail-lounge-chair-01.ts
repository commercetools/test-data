import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const abigailLoungeChair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('ALC-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(75000))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(75000))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(75000))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_378975371-myB5QCrw.jpeg'
        )
        .dimensions({ w: 5000, h: 4000 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color')
        .value({
          'en-US': 'lightpink',
          'en-GB': 'lightpink',
          'de-DE': 'lightpink',
        }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({
          'en-US': 'Soft Pink',
          'en-GB': 'Soft Pink',
          'de-DE': 'Soft Pink',
        }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-US': 'Brass', 'en-GB': 'Brass', 'de-DE': 'Brass' }),
      AttributeDraft.random()
        .name('finish')
        .value({
          'en-US': 'goldenrod',
          'en-GB': 'goldenrod',
          'de-DE': 'goldenrod',
        }),
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-US':
            '- Comes with matching throw pillow\n- Velvet upholstery\n- Pre-assembled',
          'en-GB':
            '- Comes with matching throw pillow\n- Velvet upholstery\n- Pre-assembled',
          'de-DE':
            '- Wird mit passendem Kissen geliefert\n- Samtpolsterung\n- Wird zusammengebaut geliefert',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'A lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room, bedroom or office. The chair features a comfortable and spacious seat with soft and plush velvet upholstery in soft pink color.  The backrest and armrests of the chair are slightly curved, providing a comfortable and supportive place to sit and relax. The brass spindle legs are tapered, adding to the overall elegance and sophistication of the design.  The combination of pink velvet and brass is both opulent and chic, making the lounge chair a perfect addition to a range of decor styles, from modern and minimalist to vintage-inspired and glam.  Overall, a lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and comfortable piece of furniture that can add a touch of glamour and sophistication to any space. Its soft and plush upholstery, combined with its elegant and timeless design, make it a perfect place to relax and unwind in style.',
          'en-US':
            'A lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room, bedroom or office. The chair features a comfortable and spacious seat with soft and plush velvet upholstery in soft pink color.  The backrest and armrests of the chair are slightly curved, providing a comfortable and supportive place to sit and relax. The brass spindle legs are tapered, adding to the overall elegance and sophistication of the design.  The combination of pink velvet and brass is both opulent and chic, making the lounge chair a perfect addition to a range of decor styles, from modern and minimalist to vintage-inspired and glam.  Overall, a lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and comfortable piece of furniture that can add a touch of glamour and sophistication to any space. Its soft and plush upholstery, combined with its elegant and timeless design, make it a perfect place to relax and unwind in style.',
          'de-DE':
            'Ein Loungesessel mit rosafarbener Samtpolsterung und Spindelbeinen aus Messing ist ein luxuriöses und stilvolles Möbelstück, das jedem Wohnzimmer, Schlafzimmer oder Büro einen Hauch von Glamour verleihen kann. Der Stuhl verfügt über einen bequemen und geräumigen Sitz mit weicher und plüschiger Samtpolsterung in zartrosa Farbe.  Die Rückenlehne und die Armlehnen des Stuhls sind leicht gebogen und bieten einen bequemen und stützenden Platz zum Sitzen und Entspannen. Die Spindelbeine aus Messing sind konisch zulaufend und tragen zur allgemeinen Eleganz und Raffinesse des Designs bei.  Die Kombination aus rosafarbenem Samt und Messing ist sowohl opulent als auch schick und macht diesen Loungesessel zu einer perfekten Ergänzung für eine Reihe von Einrichtungsstilen, von modern und minimalistisch bis hin zu Vintage-inspiriert und glamourös. Seine weiche Polsterung, kombiniert mit seinem eleganten und zeitlosen Design, machen ihn zu einem perfekten Ort, um sich stilvoll zu entspannen.',
        }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFC0CB',
          label: { 'de-DE': 'Rosa', 'en-GB': 'Pink', 'en-US': 'Pink' },
        }),
    ]);

export default abigailLoungeChair01;
