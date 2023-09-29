import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const modernBookcase01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MB-0973')
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
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_37229518-AEI6yZwz.jpeg'
        )
        .dimensions({ w: 2760, h: 4600 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Assembly included in delivery',
          'en-US': '- Assembly included in delivery',
          'de-DE': '- Montage im Lieferumfang enthalten',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'de-DE':
            'Dieses moderne Bücherregal hat ein einfaches und elegantes Design, das sich gut in die moderne Einrichtung einfügt. Es hat klare Linien. Das Bücherregal ist aus Holz gefertigt und mahagonifarben lackiert. Die offenen und geräumigen Regalböden bieten reichlich Platz zum Aufbewahren und Ausstellen von Büchern, Dekorationsobjekten und anderen Gegenständen. Ein minimalistisches Bücherregal erfüllt nicht nur einen funktionalen Zweck, sondern dient auch als dekoratives Möbelstück. Es ist so konzipiert, dass es sich nahtlos in seine Umgebung einfügt, ohne zu viel Aufmerksamkeit auf sich zu ziehen. Daher ist es eine ausgezeichnete Wahl für alle, die eine stilvolle, aber unauffällige Aufbewahrungslösung suchen.',
          'en-GB':
            'This Modern bookcase is designed with a simple and sleek look that blends well with modern decor. It has clean lines. The bookcase is made of wood and has a mahogany finish.  The shelves are open and spacious, providing ample space to store and display books, decorative objects, and other items.  In addition to its functional purpose, a minimalist bookcase also serves as a decorative piece of furniture. It is designed to blend seamlessly with its surroundings, without drawing too much attention to itself. As such, it is an excellent choice for those who want a stylish yet unobtrusive storage solution.',
          'en-US':
            'This Modern bookcase is designed with a simple and sleek look that blends well with modern decor. It has clean lines. The bookcase is made of wood and has a mahogany finish.  The shelves are open and spacious, providing ample space to store and display books, decorative objects, and other items.  In addition to its functional purpose, a minimalist bookcase also serves as a decorative piece of furniture. It is designed to blend seamlessly with its surroundings, without drawing too much attention to itself. As such, it is an excellent choice for those who want a stylish yet unobtrusive storage solution.',
        }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#D2B48C',
          label: { 'de-DE': 'Bräunen', 'en-GB': 'Tan', 'en-US': 'Tan' },
        }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Walnut', 'de-DE': 'Nussbaum', 'en-US': 'Walnut' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#9C5933', 'en-US': '#9C5933', 'de-DE': '#9C5933' }),
    ]);

export default modernBookcase01;
