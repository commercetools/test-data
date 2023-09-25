import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const traditionalLSeaterSofa01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('TLSS-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(359900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(359900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(359900))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305739649-_ZXpDL48.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305739419-AmHTon4o.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305740930-1rFVdtIo.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color')
        .value({ 'en-US': '#ebe6e1', 'en-GB': '#ebe6e1', 'de-DE': '#ebe6e1' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-US': 'Beige', 'en-GB': 'Beige', 'de-DE': 'Beige' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-US': '#2e2822', 'en-GB': '#2e2822', 'de-DE': '#2e2822' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({
          'en-US': 'Espresso',
          'en-GB': 'Espresso',
          'de-DE': 'Espresso',
        }),
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-US':
            '- Cotton upholstery\n- Comes with accent pillows\n- Assembly on site',
          'en-GB':
            '- Cotton upholstery\n- Comes with accent pillows\n- Assembly on site',
          'de-DE':
            '- Baumwollbezug\n- Wurfkissen um Lieferumfang enthalten\n- Selbstmontage',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'A traditional L-shaped sofa is a comfortable and practical piece of furniture. The sofa is upholstered in a durable and high-quality fabric and features a classic and timeless design that can fit well with a variety of decor styles.  The sofa provides ample room for multiple people to sit comfortably. It also features a chaise lounge or a place to stretch out and relax. The L-shape design of the sofa maximizes seating space while also providing a comfortable and inviting space to relax and unwind.  The sofa features padded armrests and backrests, providing ample support and comfort for those who sit on it. The cushions are made of high-density foam, ensuring that they are comfortable and retain their shape over time. The sofa also comes with matching throw pillows, adding to the comfort and style of the piece.  Overall, a traditional L-shaped sofa is a comfortable and practical piece of furniture that can add both style and functionality to any living room. Its classic and timeless design, comfortable cushions, and ample seating space make it a popular choice for families and anyone who loves to entertain guests in their home.',
          'en-US':
            'A traditional L-shaped sofa is a comfortable and practical piece of furniture. The sofa is upholstered in a durable and high-quality fabric and features a classic and timeless design that can fit well with a variety of decor styles.  The sofa provides ample room for multiple people to sit comfortably. It also features a chaise lounge or a place to stretch out and relax. The L-shape design of the sofa maximizes seating space while also providing a comfortable and inviting space to relax and unwind.  The sofa features padded armrests and backrests, providing ample support and comfort for those who sit on it. The cushions are made of high-density foam, ensuring that they are comfortable and retain their shape over time. The sofa also comes with matching throw pillows, adding to the comfort and style of the piece.  Overall, a traditional L-shaped sofa is a comfortable and practical piece of furniture that can add both style and functionality to any living room. Its classic and timeless design, comfortable cushions, and ample seating space make it a popular choice for families and anyone who loves to entertain guests in their home.',
          'de-DE':
            'Ein traditionelles Ecksofa ist ein bequemes und praktisches Möbelstück. Das Sofa ist mit einem strapazierfähigen und hochwertigen Baumwollstoff bezogen und verfügt über ein klassisches und zeitloses Design, das gut zu einer Vielzahl von Einrichtungsstilen passt.  Das Sofa bietet ausreichend Platz für mehrere Personen, um bequem zu sitzen. Es verfügt auch über eine Chaiselongue oder einen Platz zum Ausstrecken und Entspannen. Das L-förmige Design des Sofas maximiert den Sitzplatz und bietet gleichzeitig einen komfortablen und einladenden Raum zum Entspannen und Erholen.  Das Sofa ist mit gepolsterten Armlehnen und Rückenlehnen ausgestattet, die dem Sitzenden ausreichend Halt und Komfort bieten. Die Kissen bestehen aus hochdichtem Schaumstoff, der sicherstellt, dass sie bequem sind und ihre Form im Laufe der Zeit behalten. Das Sofa wird auch mit passenden Wurfkissen geliefert, die den Komfort und Stil des Sofas erhöhen.  Insgesamt ist ein traditionelles L-förmiges Sofa ein bequemes und praktisches Möbelstück, das jedem Wohnzimmer sowohl Stil als auch Funktionalität verleiht. Sein klassisches und zeitloses Design, die bequemen Kissen und der großzügige Sitzplatz machen es zu einer beliebten Wahl für Familien und alle, die es lieben, Gäste in ihrem Zuhause zu empfangen.',
        }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
    ]);

export default traditionalLSeaterSofa01;
