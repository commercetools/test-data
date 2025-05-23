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
                "de-DE": "White:#FFFFFF",
                "en-GB": "Weiß:#FFFFFF",
                "en-US": "White:#FFFFFF",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "Saddle Brown:#8b4513",
                "en-GB": "Sattel braun:#8b4513",
                "en-US": "Saddle Brown:#8b4513",
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
          ],
          "images": [
            {
              "dimensions": {
                "h": 6232,
                "w": 6000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Modern_Side_Table-1.1.jpeg",
            },
          ],
          "key": "minimalistModernSideTable01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "12000EUR",
              "recurrencePolicy": undefined,
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
              "key": "12000GBP",
              "recurrencePolicy": undefined,
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
              "key": "12000USD",
              "recurrencePolicy": undefined,
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
                "name": "color",
                "value": {
                  "de-DE": "Golden Rod:#DAA520",
                  "en-GB": "Goldene Rute:#DAA520",
                  "en-US": "Golden Rod:#DAA520",
                },
              },
              {
                "name": "finish",
                "value": {
                  "de-DE": "Saddle Brown:#8b4513",
                  "en-GB": "Sattel braun:#8b4513",
                  "en-US": "Saddle Brown:#8b4513",
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
            ],
            "images": [
              {
                "dimensions": {
                  "h": 6026,
                  "w": 5883,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Modern_Side_Table-2.1.jpeg",
              },
            ],
            "key": "minimalistModernSideTable02",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "4999EUR",
                "recurrencePolicy": undefined,
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
                "key": "4999GBP",
                "recurrencePolicy": undefined,
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
                "key": "4999USD",
                "recurrencePolicy": undefined,
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
        "attributes": null,
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
        "description": [
          {
            "locale": "en-GB",
            "value": "A minimalist side table with a round top and 4 tapered legs at a slant is a simple and stylish piece of furniture that can add a touch of contemporary elegance to any living space. The table features a round or circular top that is made of wood.  The top of the table is supported by four tapered legs that are set at a slight angle, giving the table a unique and modern look. The legs are made of wood.  The minimalist design of the side table emphasizes simplicity and functionality, with a clean and uncluttered look that is both stylish and practical. The table's compact size makes it an ideal choice for small living spaces or as an accent piece in a larger room.  The table can be used to display decorative items such as vases, picture frames, or sculptures, or as a functional surface for drinks, snacks, or books. Its simple and unobtrusive design allows it to blend seamlessly with a variety of interior design styles, from modern and contemporary to traditional and rustic.  Overall, a minimalist side table with a round top and 4 tapered legs at a slant is a stylish and versatile piece of furniture that can add a touch of sophistication to any living space. Its sleek and simple design, combined with its functional features, make it a practical and stylish choice for any home.",
          },
          {
            "locale": "de-DE",
            "value": "Ein minimalistischer Beistelltisch mit runder Platte und 4 schräg gestellten, konischen Beinen ist ein einfaches und stilvolles Möbelstück, das jedem Wohnraum einen Hauch zeitgenössischer Eleganz verleihen kann. Der Tisch hat eine runde oder kreisförmige Platte aus Holz. Die Tischplatte wird von vier leicht schräg gestellten, konischen Beinen getragen, die dem Tisch einen einzigartigen und modernen Look verleihen. Die Beine sind aus Holz gefertigt. Das minimalistische Design des Beistelltischs unterstreicht die Schlichtheit und Funktionalität, mit einem klaren und übersichtlichen Look, der sowohl stilvoll als auch praktisch ist. Die kompakte Größe des Tisches macht ihn zu einer idealen Wahl für kleine Wohnräume oder als Akzent in einem größeren Raum. Der Tisch kann zur Präsentation von Dekorationsgegenständen wie Vasen, Bilderrahmen oder Skulpturen oder als funktionale Ablagefläche für Getränke, Snacks oder Bücher genutzt werden. Durch sein schlichtes und unaufdringliches Design fügt er sich nahtlos in eine Vielzahl von Einrichtungsstilen ein, von modern und zeitgenössisch bis hin zu traditionell und rustikal. Insgesamt ist der minimalistische Beistelltisch mit runder Platte und 4 schräg gestellten, konischen Beinen ein stilvolles und vielseitiges Möbelstück, das jedem Wohnraum einen Hauch von Raffinesse verleihen kann. Sein schlankes und einfaches Design in Kombination mit seinen funktionalen Eigenschaften machen ihn zu einer praktischen und stilvollen Wahl für jedes Zuhause.",
          },
          {
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
              "value": "{"en-US":"White:#FFFFFF","en-GB":"Weiß:#FFFFFF","de-DE":"White:#FFFFFF"}",
            },
            {
              "name": "finish",
              "value": "{"en-US":"Saddle Brown:#8b4513","en-GB":"Sattel braun:#8b4513","de-DE":"Saddle Brown:#8b4513"}",
            },
            {
              "name": "productspec",
              "value": "{"en-US":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled","en-GB":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled","de-DE":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 6232,
                "width": 6000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Modern_Side_Table-1.1.jpeg",
            },
          ],
          "key": "minimalistModernSideTable01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "12000EUR",
              "recurrencePolicy": undefined,
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
              "key": "12000GBP",
              "recurrencePolicy": undefined,
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
              "key": "12000USD",
              "recurrencePolicy": undefined,
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
            "locale": "en-GB",
            "value": "Minimalist Modern Side Table",
          },
          {
            "locale": "de-DE",
            "value": "Minimalistischer Moderner Beistelltisch",
          },
          {
            "locale": "en-US",
            "value": "Minimalist Modern Side Table",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "en-GB",
            "value": "minimalist-modern-side-table",
          },
          {
            "locale": "de-DE",
            "value": "minimalistischer-moderner-beistelltisch",
          },
          {
            "locale": "en-US",
            "value": "minimalist-modern-side-table",
          },
        ],
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
                "name": "color",
                "value": "{"en-US":"Golden Rod:#DAA520","en-GB":"Goldene Rute:#DAA520","de-DE":"Golden Rod:#DAA520"}",
              },
              {
                "name": "finish",
                "value": "{"en-US":"Saddle Brown:#8b4513","en-GB":"Sattel braun:#8b4513","de-DE":"Saddle Brown:#8b4513"}",
              },
              {
                "name": "productspec",
                "value": "{"en-US":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled","en-GB":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled","de-DE":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 6026,
                  "width": 5883,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Modern_Side_Table-2.1.jpeg",
              },
            ],
            "key": "minimalistModernSideTable02",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "4999EUR",
                "recurrencePolicy": undefined,
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
                "key": "4999GBP",
                "recurrencePolicy": undefined,
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
                "key": "4999USD",
                "recurrencePolicy": undefined,
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
