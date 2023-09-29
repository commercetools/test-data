import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const modernGlamDresser01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MGD-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(179900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(179900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(179900))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305650073-NL2GuIBX.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305650236-phU3WdJ7.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305652757--mQZtlpW.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-US': 'silver', 'en-GB': '#8A8071', 'de-DE': 'silver' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-US': 'Suede', 'en-GB': 'Suede', 'de-DE': 'Suede' }),
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- 3 large drawers\n- suede  and nickel finish on drawer handles\n- assembly on site',
        'en-GB':
          '- 3 large drawers\n- suede  and nickel finish on drawer handles\n- assembly on site',
        'de-DE':
          '- 3 large drawers\n- suede  and nickel finish on drawer handles\n- assembly on site',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A modern glam dresser is a stylish and elegant piece of furniture that combines modern design with glamorous accents. It features clean lines, sleek surfaces, and metallic finishes, creating a chic and sophisticated look that adds a touch of luxury to any bedroom.  The dresser is made of high-quality materials. The drawers are spacious and easy to open and close, providing ample storage space for clothing, accessories, and other items.  The dresser also features glamorous metal accents handles, adding a touch of elegance and sophistication to the piece. The overall design of the dresser is sleek and minimalist, with an emphasis on clean lines and simple shapes.  A modern glam dresser can be a beautiful addition to any bedroom, adding a touch of luxury and sophistication to the space. Its clean lines, metallic finishes, and glamorous accents create a modern and elegant look that can complement a variety of decor styles.',
        'en-US':
          'A modern glam dresser is a stylish and elegant piece of furniture that combines modern design with glamorous accents. It features clean lines, sleek surfaces, and metallic finishes, creating a chic and sophisticated look that adds a touch of luxury to any bedroom.  The dresser is made of high-quality materials. The drawers are spacious and easy to open and close, providing ample storage space for clothing, accessories, and other items.  The dresser also features glamorous metal accents handles, adding a touch of elegance and sophistication to the piece. The overall design of the dresser is sleek and minimalist, with an emphasis on clean lines and simple shapes.  A modern glam dresser can be a beautiful addition to any bedroom, adding a touch of luxury and sophistication to the space. Its clean lines, metallic finishes, and glamorous accents create a modern and elegant look that can complement a variety of decor styles.',
        'de-DE':
          'Eine moderne glamouröse Kommode ist ein stilvolles und elegantes Möbelstück, das modernes Design mit glamourösen Akzenten verbindet. Sie zeichnet sich durch klare Linien, glatte Oberflächen und Metallic-Finish aus, wodurch ein schickes und anspruchsvolles Aussehen entsteht, das jedem Schlafzimmer einen Hauch von Luxus verleiht. Die Kommode ist aus hochwertigen Materialien gefertigt. Die Schubladen sind geräumig und lassen sich leicht öffnen und schließen und bieten reichlich Stauraum für Kleidung, Accessoires und andere Gegenstände. Die Kommode verfügt außerdem über glamouröse Metallgriffe, die dem Möbelstück einen Hauch von Eleganz und Raffinesse verleihen. Das Gesamtdesign der Kommode ist schlank und minimalistisch, mit einem Schwerpunkt auf klaren Linien und einfachen Formen. Eine moderne, glamouröse Kommode ist eine schöne Ergänzung für jedes Schlafzimmer und verleiht dem Raum einen Hauch von Luxus und Raffinesse. Die klaren Linien, die metallischen Oberflächen und die glamourösen Akzente sorgen für einen modernen und eleganten Look, der eine Vielzahl von Einrichtungsstilen ergänzen kann.',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#C0C0C0',
          label: { 'de-DE': 'Silber', 'en-GB': 'Silver', 'en-US': 'Silver' },
        }),
    ]);

export default modernGlamDresser01;
