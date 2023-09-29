import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const minimalistModernSideTable01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MMST-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(12000))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(12000))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(12000))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_308570068-ftaFzBEg.jpeg'
        )
        .dimensions({ w: 6000, h: 6232 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_314247429-Qt_DKygA.jpeg'
        )
        .dimensions({ w: 3758, h: 3758 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color')
        .value({ 'en-US': 'white', 'en-GB': '#FFF', 'de-DE': 'white' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-US': 'White', 'en-GB': 'White', 'de-DE': 'White' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-US': 'white', 'en-GB': '#FFF', 'de-DE': 'white' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-US': 'Marble', 'en-GB': 'Marble', 'de-DE': 'Marble' }),
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-US': '- 4 legged side table\n- Walnut legs\n- Pre-assembled',
          'en-GB': '- 4 legged side table\n- Walnut legs\n- Pre-assembled',
          'de-DE': '- 4 legged side table\n- Walnut legs\n- Pre-assembled',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            "A minimalist side table with a round top and 4 tapered legs at a slant is a simple and stylish piece of furniture that can add a touch of contemporary elegance to any living space. The table features a round or circular top that is made of wood.  The top of the table is supported by four tapered legs that are set at a slight angle, giving the table a unique and modern look. The legs are made of wood.  The minimalist design of the side table emphasizes simplicity and functionality, with a clean and uncluttered look that is both stylish and practical. The table's compact size makes it an ideal choice for small living spaces or as an accent piece in a larger room.  The table can be used to display decorative items such as vases, picture frames, or sculptures, or as a functional surface for drinks, snacks, or books. Its simple and unobtrusive design allows it to blend seamlessly with a variety of interior design styles, from modern and contemporary to traditional and rustic.  Overall, a minimalist side table with a round top and 4 tapered legs at a slant is a stylish and versatile piece of furniture that can add a touch of sophistication to any living space. Its sleek and simple design, combined with its functional features, make it a practical and stylish choice for any home.",
          'en-US':
            "A minimalist side table with a round top and 4 tapered legs at a slant is a simple and stylish piece of furniture that can add a touch of contemporary elegance to any living space. The table features a round or circular top that is made of wood.  The top of the table is supported by four tapered legs that are set at a slight angle, giving the table a unique and modern look. The legs are made of wood.  The minimalist design of the side table emphasizes simplicity and functionality, with a clean and uncluttered look that is both stylish and practical. The table's compact size makes it an ideal choice for small living spaces or as an accent piece in a larger room.  The table can be used to display decorative items such as vases, picture frames, or sculptures, or as a functional surface for drinks, snacks, or books. Its simple and unobtrusive design allows it to blend seamlessly with a variety of interior design styles, from modern and contemporary to traditional and rustic.  Overall, a minimalist side table with a round top and 4 tapered legs at a slant is a stylish and versatile piece of furniture that can add a touch of sophistication to any living space. Its sleek and simple design, combined with its functional features, make it a practical and stylish choice for any home.",
          'de-DE':
            'Ein minimalistischer Beistelltisch mit runder Platte und 4 schräg gestellten, konischen Beinen ist ein einfaches und stilvolles Möbelstück, das jedem Wohnraum einen Hauch zeitgenössischer Eleganz verleihen kann. Der Tisch hat eine runde oder kreisförmige Platte aus Holz. Die Tischplatte wird von vier leicht schräg gestellten, konischen Beinen getragen, die dem Tisch einen einzigartigen und modernen Look verleihen. Die Beine sind aus Holz gefertigt. Das minimalistische Design des Beistelltischs unterstreicht die Schlichtheit und Funktionalität, mit einem klaren und übersichtlichen Look, der sowohl stilvoll als auch praktisch ist. Die kompakte Größe des Tisches macht ihn zu einer idealen Wahl für kleine Wohnräume oder als Akzent in einem größeren Raum. Der Tisch kann zur Präsentation von Dekorationsgegenständen wie Vasen, Bilderrahmen oder Skulpturen oder als funktionale Ablagefläche für Getränke, Snacks oder Bücher genutzt werden. Durch sein schlichtes und unaufdringliches Design fügt er sich nahtlos in eine Vielzahl von Einrichtungsstilen ein, von modern und zeitgenössisch bis hin zu traditionell und rustikal. Insgesamt ist der minimalistische Beistelltisch mit runder Platte und 4 schräg gestellten, konischen Beinen ein stilvolles und vielseitiges Möbelstück, das jedem Wohnraum einen Hauch von Raffinesse verleihen kann. Sein schlankes und einfaches Design in Kombination mit seinen funktionalen Eigenschaften machen ihn zu einer praktischen und stilvollen Wahl für jedes Zuhause.',
        }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFF',
          label: { 'de-DE': 'Weiss', 'en-GB': 'White', 'en-US': 'White' },
        }),
    ]);

export default minimalistModernSideTable01;
