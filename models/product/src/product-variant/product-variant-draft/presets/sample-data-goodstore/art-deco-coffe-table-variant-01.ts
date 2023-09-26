import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const artDecoCoffeTableVariant01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('ADCT-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(320000))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(320000))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(320000))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305610491-JXS0tbLY.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305610955-SDqxdoqq.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US': '- Granite top\n- 5ft by 3ft by 2ft\n- Preassembled',
        'en-GB': '- Granite top\n- 5ft by 3ft by 2ft\n- Preassembled',
        'de-DE': '- Granite top\n- 5ft by 3ft by 2ft\n- Preassembled',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-US': 'black', 'en-GB': 'black', 'de-DE': 'black' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-US': 'Black', 'en-GB': 'Black', 'de-DE': 'Black' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-US': 'gold', 'en-GB': 'gold', 'de-DE': 'gold' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-US': 'Brass', 'en-GB': 'Brass', 'de-DE': 'Brass' }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'An Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room. The table features a geometric design, with sleek and angular lines that are characteristic of the Art Deco style.  The legs of the table are made from metal and have a shiny gold finish that adds a touch of opulence to the design. The tabletop is made from black marble, which has a natural veined pattern that gives each piece a unique and luxurious appearance. The marble top is smooth and polished, creating a sleek and sophisticated surface for displaying books, drinks, or decorative accessories.  The combination of gold and black creates a striking contrast that is both bold and elegant. The Art Deco style of the table is both timeless and glamorous, making it a perfect complement to a range of decor styles, from contemporary to vintage-inspired.  Overall, an Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish addition to any living room. Its unique and striking design, combined with its high-quality materials and craftsmanship, make it a standout piece of furniture that can elevate the look and feel of any space.',
        'en-US':
          'An Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room. The table features a geometric design, with sleek and angular lines that are characteristic of the Art Deco style.  The legs of the table are made from metal and have a shiny gold finish that adds a touch of opulence to the design. The tabletop is made from black marble, which has a natural veined pattern that gives each piece a unique and luxurious appearance. The marble top is smooth and polished, creating a sleek and sophisticated surface for displaying books, drinks, or decorative accessories.  The combination of gold and black creates a striking contrast that is both bold and elegant. The Art Deco style of the table is both timeless and glamorous, making it a perfect complement to a range of decor styles, from contemporary to vintage-inspired.  Overall, an Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish addition to any living room. Its unique and striking design, combined with its high-quality materials and craftsmanship, make it a standout piece of furniture that can elevate the look and feel of any space.',
        'de-DE':
          'Ein Art-Deco-Couchtisch mit goldenen Beinen und einer schwarzen Marmorplatte ist ein luxuriöses und stilvolles Möbelstück, das jedem Wohnzimmer einen Hauch von Glamour verleihen kann. Der Tisch verfügt über ein geometrisches Design mit schlanken und eckigen Linien, die charakteristisch für den Art-Deco-Stil sind.  Die Beine des Tisches sind aus Metall gefertigt und haben eine glänzende Goldoberfläche, die dem Design einen Hauch von Opulenz verleiht. Die Tischplatte besteht aus schwarzem Marmor, der ein natürliches geädertes Muster aufweist, das jedem Stück ein einzigartiges und luxuriöses Aussehen verleiht. Die Marmorplatte ist glatt und poliert und schafft eine glatte und raffinierte Oberfläche für die Präsentation von Büchern, Getränken oder dekorativen Accessoires.  Die Kombination aus Gold und Schwarz schafft einen auffälligen Kontrast, der sowohl mutig als auch elegant ist. Der Art-Deco-Stil des Tisches ist sowohl zeitlos als auch glamourös, was ihn zu einer perfekten Ergänzung für eine Reihe von Einrichtungsstilen macht, von zeitgenössisch bis hin zu Vintage-inspiriert.  Insgesamt ist ein Art-Deco-Couchtisch mit goldenen Beinen und einer schwarzen Marmorplatte eine luxuriöse und stilvolle Ergänzung für jedes Wohnzimmer. Sein einzigartiges und markantes Design, kombiniert mit seinen hochwertigen Materialien und seiner Handwerkskunst, machen es zu einem herausragenden Möbelstück, das das Erscheinungsbild jedes Raums aufwerten kann.',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#000',
          label: { 'de-DE': 'Schwarz', 'en-GB': 'Black', 'en-US': 'Black' },
        }),
    ]);

export default artDecoCoffeTableVariant01;
