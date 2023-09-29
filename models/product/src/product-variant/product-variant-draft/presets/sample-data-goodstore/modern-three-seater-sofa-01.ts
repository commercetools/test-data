import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const modernThreeSeaterSofa01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MTSS-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(249900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(249900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(249900))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_302369085-YrPs6-AN.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_302368965-v3zLuGxk.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_302369766-4ePJc6Jk.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_302369724-aEvV9s8N.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color')
        .value({ 'en-US': '#292828', 'en-GB': '#292828', 'de-DE': '#292828' }),
      AttributeDraft.random().name('colorlabel').value({
        'en-US': 'Charcoal',
        'en-GB': 'Charcoal',
        'de-DE': 'Charcoal',
      }),
      AttributeDraft.random().name('finishlabel').value({
        'en-US': 'Briarsmoke',
        'en-GB': 'Briarsmoke',
        'de-DE': 'Briarsmoke',
      }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-US': '#5c513d', 'en-GB': '#5c513d', 'de-DE': '#5c513d' }),
      AttributeDraft.random().name('productspec').value({
        'en-US': '- Velvet upholstery\n- 3-seater sofa\n- Assembled on site',
        'en-GB': '- Velvet upholstery\n- 3-seater sofa\n- Assembled on site',
        'de-DE': '- Velvet upholstery\n- 3-seater sofa\n- Assembled on site',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#808080',
          label: { 'de-DE': 'Grau', 'en-GB': 'Gray', 'en-US': 'Gray' },
        }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          "A three seater sofa in modern style with bolster cushions is a sleek and stylish piece of furniture that can add a touch of contemporary sophistication to any living space. The sofa features a wooden frame that is covered in soft and durable upholstery.  The sofa's design is characterized by clean lines and simple shapes, with a low profile that creates a modern and minimalist look. The backrest and seat cushions are attached to the frame, with a seamless and streamlined appearance that enhances the sofa's sleek aesthetic.  The sofa is often equipped with bolster cushions, which are long, cylindrical cushions that can be used as armrests or to support the lower back while seated. The bolster cushions are covered in the same upholstery fabric as the rest of the sofa, creating a cohesive and coordinated look.  The four legs of the sofa are made of wood, with a simple and unadorned design that complements the sofa's modern aesthetic.  The three-seater size of the sofa provides ample seating space for three people, making it an ideal choice for a small to medium-sized living room or family room. The sofa can be paired with a range of accent chairs, coffee tables, and other furniture pieces to create a cohesive and stylish living space.  Overall, a three seater sofa in modern style is a sleek and sophisticated piece of furniture that can add a touch of contemporary style to any living space. Its clean lines, simple shapes, and minimalistic design make it a versatile and stylish choice for any modern home.",
        'en-US':
          "A three seater sofa in modern style with bolster cushions is a sleek and stylish piece of furniture that can add a touch of contemporary sophistication to any living space. The sofa features a wooden frame that is covered in soft and durable upholstery.  The sofa's design is characterized by clean lines and simple shapes, with a low profile that creates a modern and minimalist look. The backrest and seat cushions are attached to the frame, with a seamless and streamlined appearance that enhances the sofa's sleek aesthetic.  The sofa is often equipped with bolster cushions, which are long, cylindrical cushions that can be used as armrests or to support the lower back while seated. The bolster cushions are covered in the same upholstery fabric as the rest of the sofa, creating a cohesive and coordinated look.  The four legs of the sofa are made of wood, with a simple and unadorned design that complements the sofa's modern aesthetic.  The three-seater size of the sofa provides ample seating space for three people, making it an ideal choice for a small to medium-sized living room or family room. The sofa can be paired with a range of accent chairs, coffee tables, and other furniture pieces to create a cohesive and stylish living space.  Overall, a three seater sofa in modern style is a sleek and sophisticated piece of furniture that can add a touch of contemporary style to any living space. Its clean lines, simple shapes, and minimalistic design make it a versatile and stylish choice for any modern home.",
        'de-DE':
          'Das Dreisitzer-Sofa im modernen Stil mit Nackenkissen ist ein elegantes und stilvolles Möbelstück, das jedem Wohnraum einen Hauch von zeitgenössischer Raffinesse verleihen kann. Das Sofa besteht aus einem Holzrahmen, der mit einer weichen und strapazierfähigen Polsterung überzogen ist. Das Design des Sofas zeichnet sich durch klare Linien und einfache Formen aus, mit einem niedrigen Profil, das einen modernen und minimalistischen Look erzeugt. Die Rückenlehne und die Sitzkissen sind mit dem Rahmen verbunden, so dass ein nahtloses und stromlinienförmiges Erscheinungsbild entsteht, das die schlichte Ästhetik des Sofas unterstreicht. Das Sofa ist häufig mit Nackenkissen ausgestattet. Das sind lange, zylindrische Kissen, die als Armlehnen oder zur Unterstützung des unteren Rückens beim Sitzen verwendet werden können. Die Nackenkissen sind mit dem gleichen Bezugsstoff wie der Rest des Sofas bezogen, wodurch ein einheitliches und abgestimmtes Aussehen entsteht. Die vier Beine des Sofas sind aus Holz und haben ein einfaches und schnörkelloses Design, das die moderne Ästhetik des Sofas ergänzt. Die Größe des Sofas als Dreisitzer bietet ausreichend Platz für drei Personen und ist damit die ideale Wahl für ein kleines bis mittelgroßes Wohnzimmer oder ein Familienzimmer. Das Sofa kann mit einer Reihe von Akzentstühlen, Couchtischen und anderen Möbelstücken kombiniert werden, um einen zusammenhängenden und stilvollen Wohnraum zu schaffen. Insgesamt ist ein Dreisitzer-Sofa im modernen Stil ein elegantes und anspruchsvolles Möbelstück, das jedem Wohnraum einen Hauch von zeitgenössischem Stil verleihen kann. Seine klaren Linien, einfachen Formen und sein minimalistisches Design machen es zu einer vielseitigen und stilvollen Wahl für jedes moderne Zuhause.',
      }),
    ]);

export default modernThreeSeaterSofa01;
