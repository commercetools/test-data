import type { TProductDraft } from '../../../types';
import minimalistModernSideTable from './minimalist-modern-side-table';
describe(`with minimalistModernSideTable preset`, () => {
  it('should return a sample minimalistModernSideTable product preset', () => {
    const minimalistModernSideTablePreset =
      minimalistModernSideTable().build<TProductDraft>();
    expect(minimalistModernSideTablePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "tables",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "new-arrivals",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          },
          {
            "key": "the-minimalist",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "minimalist-modern-side-table",
      "name": {
            "en-US": "Minimalist Modern Side Table",
            "en-GB": "Minimalist Modern Side Table",
            "de-DE": "Minimalistischer moderner Beistelltisch"
          },
      "metaTitle": {
            "en-US": "",
            "de-DE": ""
          },
      "searchKeywords": {},
      "slug": {
            "en-US": "minimalist-modern-side-table",
            "de-DE": "minimalistischer-moderner-beistelltisch",
            "en-GB": "minimalist-modern-side-table"
          },
      "publish": true,
      "priceMode": undefined,
        {
          "key": "vat-standard-eu",
          "typeId": "tax-category",
        },
        {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "masterVariant": {
          "assets": undefined,
          "sku": undefined,
          "images": undefined,
          "key": undefined,
          "prices": undefined,
          "attributes": [{"name":"color","value":{"en-US":"white","en-GB":"#FFF","de-DE":"white"}},{"name":"colorlabel","value":{"en-US":"White","en-GB":"White","de-DE":"White"}},{"name":"finish","value":{"en-US":"white","en-GB":"#FFF","de-DE":"white"}},{"name":"finishlabel","value":{"en-US":"Marble","en-GB":"Marble","de-DE":"Marble"}},{"name":"productspec","value":{"en-US":"- 4 legged side table\n- Walnut legs\n- Pre-assembled","en-GB":"- 4 legged side table\n- Walnut legs\n- Pre-assembled","de-DE":"- 4 legged side table\n- Walnut legs\n- Pre-assembled"}},{"name":"product-description","value":{"en-GB":"A minimalist side table with a round top and 4 tapered legs at a slant is a simple and stylish piece of furniture that can add a touch of contemporary elegance to any living space. The table features a round or circular top that is made of wood.  The top of the table is supported by four tapered legs that are set at a slight angle, giving the table a unique and modern look. The legs are made of wood.  The minimalist design of the side table emphasizes simplicity and functionality, with a clean and uncluttered look that is both stylish and practical. The table's compact size makes it an ideal choice for small living spaces or as an accent piece in a larger room.  The table can be used to display decorative items such as vases, picture frames, or sculptures, or as a functional surface for drinks, snacks, or books. Its simple and unobtrusive design allows it to blend seamlessly with a variety of interior design styles, from modern and contemporary to traditional and rustic.  Overall, a minimalist side table with a round top and 4 tapered legs at a slant is a stylish and versatile piece of furniture that can add a touch of sophistication to any living space. Its sleek and simple design, combined with its functional features, make it a practical and stylish choice for any home.","en-US":"A minimalist side table with a round top and 4 tapered legs at a slant is a simple and stylish piece of furniture that can add a touch of contemporary elegance to any living space. The table features a round or circular top that is made of wood.  The top of the table is supported by four tapered legs that are set at a slight angle, giving the table a unique and modern look. The legs are made of wood.  The minimalist design of the side table emphasizes simplicity and functionality, with a clean and uncluttered look that is both stylish and practical. The table's compact size makes it an ideal choice for small living spaces or as an accent piece in a larger room.  The table can be used to display decorative items such as vases, picture frames, or sculptures, or as a functional surface for drinks, snacks, or books. Its simple and unobtrusive design allows it to blend seamlessly with a variety of interior design styles, from modern and contemporary to traditional and rustic.  Overall, a minimalist side table with a round top and 4 tapered legs at a slant is a stylish and versatile piece of furniture that can add a touch of sophistication to any living space. Its sleek and simple design, combined with its functional features, make it a practical and stylish choice for any home.","de-DE":"Ein minimalistischer Beistelltisch mit runder Platte und 4 schräg zulaufenden Beinen ist ein schlichtes und stilvolles Möbelstück, das jedem Wohnraum einen Hauch zeitgemäßer Eleganz verleihen kann. Der Tisch hat eine runde oder runde Platte aus Holz.  Die Tischplatte wird von vier sich verjüngenden Beinen getragen, die leicht angewinkelt sind und dem Tisch ein einzigartiges und modernes Aussehen verleihen. Die Beine sind aus Holz.  Das minimalistische Design des Beistelltisches betont Einfachheit und Funktionalität, mit einem sauberen und übersichtlichen Look, der sowohl stilvoll als auch praktisch ist. Die kompakte Größe des Tisches macht ihn zur idealen Wahl für kleine Wohnräume oder als Akzentstück in einem größeren Raum.  Der Tisch kann zur Präsentation von Dekorationsgegenständen wie Vasen, Bilderrahmen oder Skulpturen oder als funktionale Ablage für Getränke, Snacks oder Bücher verwendet werden. Durch sein schlichtes und unaufdringliches Design fügt es sich nahtlos in eine Vielzahl von Einrichtungsstilen ein, von modern und zeitgenössisch bis hin zu traditionell und rustikal.  Insgesamt ist ein minimalistischer Beistelltisch mit runder Platte und 4 schräg zulaufenden Beinen ein stilvolles und vielseitiges Möbelstück, das jedem Wohnraum einen Hauch von Raffinesse verleihen kann. Sein schlankes und einfaches Design, kombiniert mit seinen funktionalen Eigenschaften, machen es zu einer praktischen und stilvollen Wahl für jedes Zuhause."}},{"name":"color-filter","value":{"key":"#FFF","label":{"de-DE":"Weiss","en-GB":"White","en-US":"White"}}}],
        },
        "variants": [
        {
          "assets": undefined,
          "sku": undefined,
          "images": undefined,
          "key": undefined,
          "prices": undefined,
          "attributes": [{"name":"finishlabel","value":{"en-US":"Walnut","en-GB":"Walnut","de-DE":"Walnut"}},{"name":"color","value":{"en-US":"#d69169","en-GB":"#d69169","de-DE":"#d69169"}},{"name":"colorlabel","value":{"en-US":"Golden Pecan","en-GB":"Golden Pecan","de-DE":"Golden Pecan"}},{"name":"finish","value":{"en-US":"#d69169","en-GB":"#d69169","de-DE":"#d69169"}},{"name":"productspec","value":{"en-US":"- 4 legged side table\n- Walnut legs\n- Pre-assembled","en-GB":"- 4 legged side table\n- Walnut legs\n- Pre-assembled","de-DE":"- 4 legged side table\n- Walnut legs\n- Pre-assembled"}},{"name":"product-description","value":{"en-GB":"A minimalist side table with a round top and 4 tapered legs at a slant is a simple and stylish piece of furniture that can add a touch of contemporary elegance to any living space. The table features a round or circular top that is made of wood.  The top of the table is supported by four tapered legs that are set at a slight angle, giving the table a unique and modern look. The legs are made of wood.  The minimalist design of the side table emphasizes simplicity and functionality, with a clean and uncluttered look that is both stylish and practical. The table's compact size makes it an ideal choice for small living spaces or as an accent piece in a larger room.  The table can be used to display decorative items such as vases, picture frames, or sculptures, or as a functional surface for drinks, snacks, or books. Its simple and unobtrusive design allows it to blend seamlessly with a variety of interior design styles, from modern and contemporary to traditional and rustic.  Overall, a minimalist side table with a round top and 4 tapered legs at a slant is a stylish and versatile piece of furniture that can add a touch of sophistication to any living space. Its sleek and simple design, combined with its functional features, make it a practical and stylish choice for any home.","en-US":"A minimalist side table with a round top and 4 tapered legs at a slant is a simple and stylish piece of furniture that can add a touch of contemporary elegance to any living space. The table features a round or circular top that is made of wood.  The top of the table is supported by four tapered legs that are set at a slight angle, giving the table a unique and modern look. The legs are made of wood.  The minimalist design of the side table emphasizes simplicity and functionality, with a clean and uncluttered look that is both stylish and practical. The table's compact size makes it an ideal choice for small living spaces or as an accent piece in a larger room.  The table can be used to display decorative items such as vases, picture frames, or sculptures, or as a functional surface for drinks, snacks, or books. Its simple and unobtrusive design allows it to blend seamlessly with a variety of interior design styles, from modern and contemporary to traditional and rustic.  Overall, a minimalist side table with a round top and 4 tapered legs at a slant is a stylish and versatile piece of furniture that can add a touch of sophistication to any living space. Its sleek and simple design, combined with its functional features, make it a practical and stylish choice for any home.","de-DE":"Ein minimalistischer Beistelltisch mit runder Platte und 4 schräg zulaufenden Beinen ist ein schlichtes und stilvolles Möbelstück, das jedem Wohnraum einen Hauch zeitgemäßer Eleganz verleihen kann. Der Tisch hat eine runde oder runde Platte aus Holz.  Die Tischplatte wird von vier sich verjüngenden Beinen getragen, die leicht angewinkelt sind und dem Tisch ein einzigartiges und modernes Aussehen verleihen. Die Beine sind aus Holz.  Das minimalistische Design des Beistelltisches betont Einfachheit und Funktionalität, mit einem sauberen und übersichtlichen Look, der sowohl stilvoll als auch praktisch ist. Die kompakte Größe des Tisches macht ihn zur idealen Wahl für kleine Wohnräume oder als Akzentstück in einem größeren Raum.  Der Tisch kann zur Präsentation von Dekorationsgegenständen wie Vasen, Bilderrahmen oder Skulpturen oder als funktionale Ablage für Getränke, Snacks oder Bücher verwendet werden. Durch sein schlichtes und unaufdringliches Design fügt es sich nahtlos in eine Vielzahl von Einrichtungsstilen ein, von modern und zeitgenössisch bis hin zu traditionell und rustikal.  Insgesamt ist ein minimalistischer Beistelltisch mit runder Platte und 4 schräg zulaufenden Beinen ein stilvolles und vielseitiges Möbelstück, das jedem Wohnraum einen Hauch von Raffinesse verleihen kann. Sein schlankes und einfaches Design, kombiniert mit seinen funktionalen Eigenschaften, machen es zu einer praktischen und stilvollen Wahl für jedes Zuhause."}},{"name":"color-filter","value":{"key":"#D2B48C","label":{"de-DE":"Bräunen","en-GB":"Tan","en-US":"Tan"}}}],
        }
       ]
      }
    `);
  });
});
