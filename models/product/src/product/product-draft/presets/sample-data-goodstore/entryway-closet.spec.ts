import type { TProductDraft } from '../../../types';
import entrywayCloset from './entryway-closet';
describe(`with entrywayCloset preset`, () => {
  it('should return a sample entrywayCloset product preset', () => {
    const entrywayClosetPreset = entrywayCloset().build<TProductDraft>();
    expect(entrywayClosetPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "storage--tables",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Ein Einbauschrank mit Spiegeln und Leuchten wird in der Nähe des Eingangs eines Hauses oder einer Wohnung platziert. Der Schrank verfügt über Ganzkörperspiegel, um Ihnen zu ermöglichen Ihr Aussehen zu überprüfen, bevor sie das Haus verlassen. Der Schrank verfügt über eine Beleuchtung, die dazu beitragen kann, den Raum aufzuhellen und das Auffinden von aufbewahrten Gegenständen zu erleichtern. Das Gesamtdesign des Schranks ist von Natur aus minimalistisch, mit klaren Linien und einem einfachen Farbschema, das sich nahtlos in das umgebende Dekor einfügen soll. Zusätzlich zu Spiegeln und Beleuchtung kann der Schrank Haken oder Regale zum Aufbewahren von Jacken, Hüten, Schuhen und anderen Accessoires aufweisen.",
          "en": undefined,
          "en-GB": "An entryway closet with mirrors and lights is a built-in closet that is situated near the entrance of a house or apartment. The closet features full-length mirrors, which are designed to allow people to check their appearance before leaving the house. The closet has lighting installed, which can help to brighten the space and make it easier to find and grab items stored within. The overall design of the closet is minimalist in nature, with clean lines and a simple color scheme that is meant to blend seamlessly with the surrounding decor. In addition to mirrors and lighting, the closet may feature hooks or shelves for storing jackets, hats, shoes, and other accessories.",
          "en-US": "An entryway closet with mirrors and lights is a built-in closet that is situated near the entrance of a house or apartment. The closet features full-length mirrors, which are designed to allow people to check their appearance before leaving the house. The closet has lighting installed, which can help to brighten the space and make it easier to find and grab items stored within. The overall design of the closet is minimalist in nature, with clean lines and a simple color scheme that is meant to blend seamlessly with the surrounding decor. In addition to mirrors and lighting, the closet may feature hooks or shelves for storing jackets, hats, shoes, and other accessories.",
          "fr": undefined,
        },
        "key": "entryway-closet",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Montage im Lieferumfang enthalten",
                "en-GB": "- Assembly included in delivery",
                "en-US": "- Assembly included in delivery",
              },
            },
            {
              "name": "finishlabel",
              "value": {
                "de-DE": "weiße Eiche",
                "en-GB": "White Oak",
                "en-US": "White Oak",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "#EFDBB4",
                "en-GB": "#EFDBB4",
                "en-US": "#EFDBB4",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#F5F5DC",
                "label": {
                  "de-DE": "Beige",
                  "en-GB": "Beige",
                  "en-US": "Beige",
                },
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4125,
                "w": 5500,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_377072189-VkrMZMom.jpeg",
            },
            {
              "dimensions": {
                "h": 4512,
                "w": 4700,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_377072356-yRaYUH0J.jpeg",
            },
            {
              "dimensions": {
                "h": 4125,
                "w": 5500,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_377072850-w10HxuUM.jpeg",
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
                "centAmount": 259900,
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
                "centAmount": 259900,
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
                "centAmount": 259900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "EWC-07",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Einbauschrank",
          "en": undefined,
          "en-GB": "Entryway Closet",
          "en-US": "Entryway Closet",
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
          "de-DE": "eingangsschrank",
          "en": undefined,
          "en-GB": "entryway-closet",
          "en-US": "entryway-closet",
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
});
