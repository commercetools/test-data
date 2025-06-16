import type { TProductDraft } from '../../../types';
import orionDoubleBed from './orion-double-bed';

describe(`with orionDoubleBed preset`, () => {
  it(`should return a orionDoubleBed preset`, () => {
    const orionDoubleBedPreset = orionDoubleBed().build<TProductDraft>();
    expect(orionDoubleBedPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "beds",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Ein Queensize-Bett mit getuftetem Kopfteil und Podest und Stahlfüßen ist ein modernes und stilvolles Möbelstück. Das Kopfteil ist hoch und breit und verfügt über ein getuftetes Design. Der für das Kopfteil verwendete Stoff ist weich und luxuriös und bietet einen bequemen Platz zum Anlehnen, wenn man sich im Bett aufrichtet. Das Bett steht auf einem Podest, das von schlanken und stabilen Stahlbeinen getragen wird. Das Podest bietet eine solide und stabile Grundlage für die Matratze und verleiht dem Bett gleichzeitig einen klaren und minimalistischen Look. Insgesamt ist dieses Bett ein schönes und funktionales Möbelstück, das sich perfekt für ein modernes Schlafzimmer mit minimalistischer oder industrieller Ästhetik eignet.",
          "en": undefined,
          "en-GB": "A queen bed with a tufted headboard and platform and steel legs is a modern and stylish piece of furniture. The headboard is tall and wide, featuring a tufted design. The fabric used for the headboard is soft and luxurious, providing a comfortable place to lean against when sitting up in bed.  The bed is raised off the ground on a platform, which is supported by sleek and sturdy steel legs. The platform provides a solid and stable foundation for the mattress, while also giving the bed a clean and minimalist look.   Overall, this queen bed is a beautiful and functional piece that would be perfect for a modern bedroom with a minimalist or industrial aesthetic.",
          "en-US": "A queen bed with a tufted headboard and platform and steel legs is a modern and stylish piece of furniture. The headboard is tall and wide, featuring a tufted design. The fabric used for the headboard is soft and luxurious, providing a comfortable place to lean against when sitting up in bed.  The bed is raised off the ground on a platform, which is supported by sleek and sturdy steel legs. The platform provides a solid and stable foundation for the mattress, while also giving the bed a clean and minimalist look.   Overall, this queen bed is a beautiful and functional piece that would be perfect for a modern bedroom with a minimalist or industrial aesthetic.",
          "fr": undefined,
        },
        "key": "orion-double-bed",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Montage im Lieferumfang enthalten
      - Matratze nicht im Lieferumfang enthalten",
                "en-GB": "- Assembly included at delivery
      - Mattress not included",
                "en-US": "- Assembly included at delivery
      - Mattress not included",
              },
            },
            {
              "name": "search-color",
              "value": [
                {
                  "de-DE": "Grün",
                  "en-GB": "Green",
                  "en-US": "Green",
                },
              ],
            },
            {
              "name": "search-finish",
              "value": [
                {
                  "de-DE": "Silber",
                  "en-GB": "Silver",
                  "en-US": "Silver",
                },
              ],
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Salbei",
                "en-GB": "Sage",
                "en-US": "Sage",
              },
            },
            {
              "name": "finish-label",
              "value": {
                "de-DE": "Silber",
                "en-GB": "Silver",
                "en-US": "Silver",
              },
            },
            {
              "name": "color-code",
              "value": "#BCB88A",
            },
            {
              "name": "finish-code",
              "value": "#C0C0C0",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3621,
                "w": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Orion_Double_Bed-1.1.jpeg",
            },
          ],
          "key": "orionDoubleBed01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "159900EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 159900,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "159900GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 159900,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "159900USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 159900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "OTB-07",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Orion Doppelbett",
          "en": undefined,
          "en-GB": "Orion Double Bed",
          "en-US": "Orion Double Bed",
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
          "de-DE": "orion-doppelbett",
          "en": undefined,
          "en-GB": "orion-double-bed",
          "en-US": "orion-double-bed",
          "fr": undefined,
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });

  it(`should return a orionDoubleBed preset when built for graphql`, () => {
    const orionDoubleBedPresetGraphql =
      orionDoubleBed().buildGraphql<TProductDraft>();
    expect(orionDoubleBedPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "beds",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "A queen bed with a tufted headboard and platform and steel legs is a modern and stylish piece of furniture. The headboard is tall and wide, featuring a tufted design. The fabric used for the headboard is soft and luxurious, providing a comfortable place to lean against when sitting up in bed.  The bed is raised off the ground on a platform, which is supported by sleek and sturdy steel legs. The platform provides a solid and stable foundation for the mattress, while also giving the bed a clean and minimalist look.   Overall, this queen bed is a beautiful and functional piece that would be perfect for a modern bedroom with a minimalist or industrial aesthetic.",
          },
          {
            "locale": "de-DE",
            "value": "Ein Queensize-Bett mit getuftetem Kopfteil und Podest und Stahlfüßen ist ein modernes und stilvolles Möbelstück. Das Kopfteil ist hoch und breit und verfügt über ein getuftetes Design. Der für das Kopfteil verwendete Stoff ist weich und luxuriös und bietet einen bequemen Platz zum Anlehnen, wenn man sich im Bett aufrichtet. Das Bett steht auf einem Podest, das von schlanken und stabilen Stahlbeinen getragen wird. Das Podest bietet eine solide und stabile Grundlage für die Matratze und verleiht dem Bett gleichzeitig einen klaren und minimalistischen Look. Insgesamt ist dieses Bett ein schönes und funktionales Möbelstück, das sich perfekt für ein modernes Schlafzimmer mit minimalistischer oder industrieller Ästhetik eignet.",
          },
          {
            "locale": "en-US",
            "value": "A queen bed with a tufted headboard and platform and steel legs is a modern and stylish piece of furniture. The headboard is tall and wide, featuring a tufted design. The fabric used for the headboard is soft and luxurious, providing a comfortable place to lean against when sitting up in bed.  The bed is raised off the ground on a platform, which is supported by sleek and sturdy steel legs. The platform provides a solid and stable foundation for the mattress, while also giving the bed a clean and minimalist look.   Overall, this queen bed is a beautiful and functional piece that would be perfect for a modern bedroom with a minimalist or industrial aesthetic.",
          },
        ],
        "key": "orion-double-bed",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Assembly included at delivery\\n- Mattress not included","de-DE":"- Montage im Lieferumfang enthalten\\n- Matratze nicht im Lieferumfang enthalten","en-US":"- Assembly included at delivery\\n- Mattress not included"}",
            },
            {
              "name": "search-color",
              "value": "[{"en-US":"Green","en-GB":"Green","de-DE":"Grün"}]",
            },
            {
              "name": "search-finish",
              "value": "[{"en-US":"Silver","en-GB":"Silver","de-DE":"Silber"}]",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Sage","de-DE":"Salbei","en-US":"Sage"}",
            },
            {
              "name": "finish-label",
              "value": "{"en-GB":"Silver","de-DE":"Silber","en-US":"Silver"}",
            },
            {
              "name": "color-code",
              "value": ""#BCB88A"",
            },
            {
              "name": "finish-code",
              "value": ""#C0C0C0"",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3621,
                "width": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Orion_Double_Bed-1.1.jpeg",
            },
          ],
          "key": "orionDoubleBed01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "159900EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 159900,
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
              "key": "159900GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 159900,
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
              "key": "159900USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 159900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "OTB-07",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Orion Double Bed",
          },
          {
            "locale": "de-DE",
            "value": "Orion Doppelbett",
          },
          {
            "locale": "en-US",
            "value": "Orion Double Bed",
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
            "value": "orion-double-bed",
          },
          {
            "locale": "de-DE",
            "value": "orion-doppelbett",
          },
          {
            "locale": "en-US",
            "value": "orion-double-bed",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
