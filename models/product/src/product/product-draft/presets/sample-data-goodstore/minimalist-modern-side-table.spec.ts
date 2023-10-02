import type { TProductDraft } from '../../../types';
import minimalistModernSideTable from './minimalist-modern-side-table';

describe(`with minimalistModernSideTable preset`, () => {
  it(`should return a minimalistModernSideTable preset`, () => {
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
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Ein minimalistischer Beistelltisch mit runder Platte und 4 schräg gestellten, konischen Beinen ist ein einfaches und stilvolles Möbelstück, das jedem Wohnraum einen Hauch zeitgenössischer Eleganz verleihen kann. Der Tisch hat eine runde oder kreisförmige Platte aus Holz. Die Tischplatte wird von vier leicht schräg gestellten, konischen Beinen getragen, die dem Tisch einen einzigartigen und modernen Look verleihen. Die Beine sind aus Holz gefertigt. Das minimalistische Design des Beistelltischs unterstreicht die Schlichtheit und Funktionalität, mit einem klaren und übersichtlichen Look, der sowohl stilvoll als auch praktisch ist. Die kompakte Größe des Tisches macht ihn zu einer idealen Wahl für kleine Wohnräume oder als Akzent in einem größeren Raum. Der Tisch kann zur Präsentation von Dekorationsgegenständen wie Vasen, Bilderrahmen oder Skulpturen oder als funktionale Ablagefläche für Getränke, Snacks oder Bücher genutzt werden. Durch sein schlichtes und unaufdringliches Design fügt er sich nahtlos in eine Vielzahl von Einrichtungsstilen ein, von modern und zeitgenössisch bis hin zu traditionell und rustikal. Insgesamt ist der minimalistische Beistelltisch mit runder Platte und 4 schräg gestellten, konischen Beinen ein stilvolles und vielseitiges Möbelstück, das jedem Wohnraum einen Hauch von Raffinesse verleihen kann. Sein schlankes und einfaches Design in Kombination mit seinen funktionalen Eigenschaften machen ihn zu einer praktischen und stilvollen Wahl für jedes Zuhause.",
          "en": undefined,
          "en-GB": "A minimalist side table with a round top and 4 tapered legs at a slant is a simple and stylish piece of furniture that can add a touch of contemporary elegance to any living space. The table features a round or circular top that is made of wood.  The top of the table is supported by four tapered legs that are set at a slight angle, giving the table a unique and modern look. The legs are made of wood.  The minimalist design of the side table emphasizes simplicity and functionality, with a clean and uncluttered look that is both stylish and practical. The table's compact size makes it an ideal choice for small living spaces or as an accent piece in a larger room.  The table can be used to display decorative items such as vases, picture frames, or sculptures, or as a functional surface for drinks, snacks, or books. Its simple and unobtrusive design allows it to blend seamlessly with a variety of interior design styles, from modern and contemporary to traditional and rustic.  Overall, a minimalist side table with a round top and 4 tapered legs at a slant is a stylish and versatile piece of furniture that can add a touch of sophistication to any living space. Its sleek and simple design, combined with its functional features, make it a practical and stylish choice for any home.",
          "en-US": "A minimalist side table with a round top and 4 tapered legs at a slant is a simple and stylish piece of furniture that can add a touch of contemporary elegance to any living space. The table features a round or circular top that is made of wood.  The top of the table is supported by four tapered legs that are set at a slight angle, giving the table a unique and modern look. The legs are made of wood.  The minimalist design of the side table emphasizes simplicity and functionality, with a clean and uncluttered look that is both stylish and practical. The table's compact size makes it an ideal choice for small living spaces or as an accent piece in a larger room.  The table can be used to display decorative items such as vases, picture frames, or sculptures, or as a functional surface for drinks, snacks, or books. Its simple and unobtrusive design allows it to blend seamlessly with a variety of interior design styles, from modern and contemporary to traditional and rustic.  Overall, a minimalist side table with a round top and 4 tapered legs at a slant is a stylish and versatile piece of furniture that can add a touch of sophistication to any living space. Its sleek and simple design, combined with its functional features, make it a practical and stylish choice for any home.",
          "fr": undefined,
        },
        "key": "minimalist-modern-side-table",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color",
              "value": {
                "de-DE": "white",
                "en-GB": "#FFF",
                "en-US": "white",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "White",
                "en-GB": "White",
                "en-US": "White",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "white",
                "en-GB": "#FFF",
                "en-US": "white",
              },
            },
            {
              "name": "finishlabel",
              "value": {
                "de-DE": "Marble",
                "en-GB": "Marble",
                "en-US": "Marble",
              },
            },
            {
              "name": "productspec",
              "value": {
                "de-DE": "- 4 legged side table
      - Walnut legs
      - Pre-assembled",
                "en-GB": "- 4 legged side table
      - Walnut legs
      - Pre-assembled",
                "en-US": "- 4 legged side table
      - Walnut legs
      - Pre-assembled",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#FFF",
                "label": {
                  "de-DE": "Weiss",
                  "en-GB": "White",
                  "en-US": "White",
                },
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 6232,
                "w": 6000,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_308570068-ftaFzBEg.jpeg",
            },
            {
              "dimensions": {
                "h": 3758,
                "w": 3758,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_314247429-Qt_DKygA.jpeg",
            },
          ],
          "key": undefined,
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 12000,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 12000,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 12000,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "MMST-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Minimalistischer Moderner Beistelltisch",
          "en": undefined,
          "en-GB": "Minimalist Modern Side Table",
          "en-US": "Minimalist Modern Side Table",
          "fr": undefined,
        },
        "priceMode": undefined,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "minimalistischer-moderner-beistelltisch",
          "en": undefined,
          "en-GB": "minimalist-modern-side-table",
          "en-US": "minimalist-modern-side-table",
          "fr": undefined,
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "finishlabel",
                "value": {
                  "de-DE": "Walnut",
                  "en-GB": "Walnut",
                  "en-US": "Walnut",
                },
              },
              {
                "name": "color",
                "value": {
                  "de-DE": "#d69169",
                  "en-GB": "#d69169",
                  "en-US": "#d69169",
                },
              },
              {
                "name": "colorlabel",
                "value": {
                  "de-DE": "Golden Pecan",
                  "en-GB": "Golden Pecan",
                  "en-US": "Golden Pecan",
                },
              },
              {
                "name": "finish",
                "value": {
                  "de-DE": "#d69169",
                  "en-GB": "#d69169",
                  "en-US": "#d69169",
                },
              },
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- 4 legged side table
      - Walnut legs
      - Pre-assembled",
                  "en-GB": "- 4 legged side table
      - Walnut legs
      - Pre-assembled",
                  "en-US": "- 4 legged side table
      - Walnut legs
      - Pre-assembled",
                },
              },
              {
                "name": "color-filter",
                "value": {
                  "key": "#D2B48C",
                  "label": {
                    "de-DE": "Bräunen",
                    "en-GB": "Tan",
                    "en-US": "Tan",
                  },
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 6026,
                  "w": 5883,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_308570077-dEUwL6Ta.jpeg",
              },
            ],
            "key": undefined,
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 4999,
                  "currencyCode": "EUR",
                },
              },
              {
                "channel": undefined,
                "country": "GB",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 4999,
                  "currencyCode": "GBP",
                },
              },
              {
                "channel": undefined,
                "country": "US",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 4999,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "MMST-02",
          },
        ],
      }
    `);
  });

  it(`should return a minimalistModernSideTable preset when built for graphql`, () => {
    const minimalistModernSideTablePresetGraphql =
      minimalistModernSideTable().buildGraphql<TProductDraft>();
    expect(minimalistModernSideTablePresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "__typename": "Reference",
            "key": "tables",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "furniture",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "new-arrivals",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "collections",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "the-minimalist",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A minimalist side table with a round top and 4 tapered legs at a slant is a simple and stylish piece of furniture that can add a touch of contemporary elegance to any living space. The table features a round or circular top that is made of wood.  The top of the table is supported by four tapered legs that are set at a slight angle, giving the table a unique and modern look. The legs are made of wood.  The minimalist design of the side table emphasizes simplicity and functionality, with a clean and uncluttered look that is both stylish and practical. The table's compact size makes it an ideal choice for small living spaces or as an accent piece in a larger room.  The table can be used to display decorative items such as vases, picture frames, or sculptures, or as a functional surface for drinks, snacks, or books. Its simple and unobtrusive design allows it to blend seamlessly with a variety of interior design styles, from modern and contemporary to traditional and rustic.  Overall, a minimalist side table with a round top and 4 tapered legs at a slant is a stylish and versatile piece of furniture that can add a touch of sophistication to any living space. Its sleek and simple design, combined with its functional features, make it a practical and stylish choice for any home.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Ein minimalistischer Beistelltisch mit runder Platte und 4 schräg gestellten, konischen Beinen ist ein einfaches und stilvolles Möbelstück, das jedem Wohnraum einen Hauch zeitgenössischer Eleganz verleihen kann. Der Tisch hat eine runde oder kreisförmige Platte aus Holz. Die Tischplatte wird von vier leicht schräg gestellten, konischen Beinen getragen, die dem Tisch einen einzigartigen und modernen Look verleihen. Die Beine sind aus Holz gefertigt. Das minimalistische Design des Beistelltischs unterstreicht die Schlichtheit und Funktionalität, mit einem klaren und übersichtlichen Look, der sowohl stilvoll als auch praktisch ist. Die kompakte Größe des Tisches macht ihn zu einer idealen Wahl für kleine Wohnräume oder als Akzent in einem größeren Raum. Der Tisch kann zur Präsentation von Dekorationsgegenständen wie Vasen, Bilderrahmen oder Skulpturen oder als funktionale Ablagefläche für Getränke, Snacks oder Bücher genutzt werden. Durch sein schlichtes und unaufdringliches Design fügt er sich nahtlos in eine Vielzahl von Einrichtungsstilen ein, von modern und zeitgenössisch bis hin zu traditionell und rustikal. Insgesamt ist der minimalistische Beistelltisch mit runder Platte und 4 schräg gestellten, konischen Beinen ein stilvolles und vielseitiges Möbelstück, das jedem Wohnraum einen Hauch von Raffinesse verleihen kann. Sein schlankes und einfaches Design in Kombination mit seinen funktionalen Eigenschaften machen ihn zu einer praktischen und stilvollen Wahl für jedes Zuhause.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A minimalist side table with a round top and 4 tapered legs at a slant is a simple and stylish piece of furniture that can add a touch of contemporary elegance to any living space. The table features a round or circular top that is made of wood.  The top of the table is supported by four tapered legs that are set at a slight angle, giving the table a unique and modern look. The legs are made of wood.  The minimalist design of the side table emphasizes simplicity and functionality, with a clean and uncluttered look that is both stylish and practical. The table's compact size makes it an ideal choice for small living spaces or as an accent piece in a larger room.  The table can be used to display decorative items such as vases, picture frames, or sculptures, or as a functional surface for drinks, snacks, or books. Its simple and unobtrusive design allows it to blend seamlessly with a variety of interior design styles, from modern and contemporary to traditional and rustic.  Overall, a minimalist side table with a round top and 4 tapered legs at a slant is a stylish and versatile piece of furniture that can add a touch of sophistication to any living space. Its sleek and simple design, combined with its functional features, make it a practical and stylish choice for any home.",
          },
        ],
        "key": "minimalist-modern-side-table",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color",
              "value": "{"en-US":"white","en-GB":"#FFF","de-DE":"white"}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-US":"White","en-GB":"White","de-DE":"White"}",
            },
            {
              "name": "finish",
              "value": "{"en-US":"white","en-GB":"#FFF","de-DE":"white"}",
            },
            {
              "name": "finishlabel",
              "value": "{"en-US":"Marble","en-GB":"Marble","de-DE":"Marble"}",
            },
            {
              "name": "productspec",
              "value": "{"en-US":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled","en-GB":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled","de-DE":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#FFF","label":{"de-DE":"Weiss","en-GB":"White","en-US":"White"}}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 6232,
                "width": 6000,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_308570068-ftaFzBEg.jpeg",
            },
            {
              "dimensions": {
                "height": 3758,
                "width": 3758,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_314247429-Qt_DKygA.jpeg",
            },
          ],
          "key": undefined,
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 12000,
                  "currencyCode": "EUR",
                },
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 12000,
                  "currencyCode": "GBP",
                },
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 12000,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "MMST-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Minimalist Modern Side Table",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Minimalistischer Moderner Beistelltisch",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Minimalist Modern Side Table",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "__typename": "Reference",
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "minimalist-modern-side-table",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "minimalistischer-moderner-beistelltisch",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "minimalist-modern-side-table",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "__typename": "Reference",
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "finishlabel",
                "value": "{"en-US":"Walnut","en-GB":"Walnut","de-DE":"Walnut"}",
              },
              {
                "name": "color",
                "value": "{"en-US":"#d69169","en-GB":"#d69169","de-DE":"#d69169"}",
              },
              {
                "name": "colorlabel",
                "value": "{"en-US":"Golden Pecan","en-GB":"Golden Pecan","de-DE":"Golden Pecan"}",
              },
              {
                "name": "finish",
                "value": "{"en-US":"#d69169","en-GB":"#d69169","de-DE":"#d69169"}",
              },
              {
                "name": "productspec",
                "value": "{"en-US":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled","en-GB":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled","de-DE":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled"}",
              },
              {
                "name": "color-filter",
                "value": "{"key":"#D2B48C","label":{"de-DE":"Bräunen","en-GB":"Tan","en-US":"Tan"}}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 6026,
                  "width": 5883,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_308570077-dEUwL6Ta.jpeg",
              },
            ],
            "key": undefined,
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 4999,
                    "currencyCode": "EUR",
                  },
                },
              },
              {
                "channel": undefined,
                "country": "GB",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 4999,
                    "currencyCode": "GBP",
                  },
                },
              },
              {
                "channel": undefined,
                "country": "US",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 4999,
                    "currencyCode": "USD",
                  },
                },
              },
            ],
            "sku": "MMST-02",
          },
        ],
      }
    `);
  });
});
