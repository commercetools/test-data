import type { TProductDraft } from '../../../types';
import harvestPlate from './harvest-plate';

describe(`with harvestPlate preset`, () => {
  it(`should return a harvestPlate preset`, () => {
    const harvestPlatePreset = harvestPlate().build<TProductDraft>();
    expect(harvestPlatePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "plates",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "serving-platters",
            "typeId": "category",
          },
          {
            "key": "serveware",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Diese muschelförmige Servierplatte ist ideal zum Servieren von Meeresfrüchten wie Garnelen, Austern oder Sushi-Rollen, kann aber auch für andere Gerichte verwendet werden. Es ist eine beliebte Wahl für Strandpartys, Küstenrestaurants oder für diejenigen, die ihr Zuhause gerne mit nautischen Akzenten dekorieren. Insgesamt ist ein muschelförmiger Servierteller eine einzigartige und stilvolle Wahl zum Servieren von Speisen. Sein natürliches Aussehen und das vom Strand inspirierte Design machen es zu einer lustigen und skurrilen Ergänzung für jeden Essensanlass.",
          "en": undefined,
          "en-GB": "This seashell-shaped serving plate is ideal for serving seafood, such as shrimp, oysters, or sushi rolls, but can also be used for other types of cuisine. It is a popular choice for beach-themed parties, coastal restaurants, or for those who enjoy decorating their home with nautical accents.  Overall, a seashell shaped serving plate is a unique and stylish choice for serving food. Its natural appearance and beach-inspired design make it a fun and whimsical addition to any dining occasion.",
          "en-US": "This seashell-shaped serving plate is ideal for serving seafood, such as shrimp, oysters, or sushi rolls, but can also be used for other types of cuisine. It is a popular choice for beach-themed parties, coastal restaurants, or for those who enjoy decorating their home with nautical accents.  Overall, a seashell shaped serving plate is a unique and stylish choice for serving food. Its natural appearance and beach-inspired design make it a fun and whimsical addition to any dining occasion.",
          "fr": undefined,
        },
        "key": "harvest-plate",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Enthält 1 Teller",
                "en-GB": "- Includes 1 plate",
                "en-US": "- Includes 1 plate",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Weiß:#FFFFFF",
                "en-GB": "White:#FFFFFF",
                "en-US": "White:#FFFFFF",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3812,
                "w": 4421,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Harvest_Plate-1.1.jpeg",
            },
          ],
          "key": "harvestPlate01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1399EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 1399,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1399GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 1399,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1399USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 1399,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "HP-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Ernteplatte",
          "en": undefined,
          "en-GB": "Harvest Plate",
          "en-US": "Harvest Plate",
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
          "de-DE": "ernteplatte",
          "en": undefined,
          "en-GB": "harvest-plate",
          "en-US": "harvest-plate",
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

  it(`should return a harvestPlate preset when built for graphql`, () => {
    const harvestPlatePresetGraphql =
      harvestPlate().buildGraphql<TProductDraft>();
    expect(harvestPlatePresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "plates",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "serving-platters",
            "typeId": "category",
          },
          {
            "key": "serveware",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "This seashell-shaped serving plate is ideal for serving seafood, such as shrimp, oysters, or sushi rolls, but can also be used for other types of cuisine. It is a popular choice for beach-themed parties, coastal restaurants, or for those who enjoy decorating their home with nautical accents.  Overall, a seashell shaped serving plate is a unique and stylish choice for serving food. Its natural appearance and beach-inspired design make it a fun and whimsical addition to any dining occasion.",
          },
          {
            "locale": "en-US",
            "value": "This seashell-shaped serving plate is ideal for serving seafood, such as shrimp, oysters, or sushi rolls, but can also be used for other types of cuisine. It is a popular choice for beach-themed parties, coastal restaurants, or for those who enjoy decorating their home with nautical accents.  Overall, a seashell shaped serving plate is a unique and stylish choice for serving food. Its natural appearance and beach-inspired design make it a fun and whimsical addition to any dining occasion.",
          },
          {
            "locale": "de-DE",
            "value": "Diese muschelförmige Servierplatte ist ideal zum Servieren von Meeresfrüchten wie Garnelen, Austern oder Sushi-Rollen, kann aber auch für andere Gerichte verwendet werden. Es ist eine beliebte Wahl für Strandpartys, Küstenrestaurants oder für diejenigen, die ihr Zuhause gerne mit nautischen Akzenten dekorieren. Insgesamt ist ein muschelförmiger Servierteller eine einzigartige und stilvolle Wahl zum Servieren von Speisen. Sein natürliches Aussehen und das vom Strand inspirierte Design machen es zu einer lustigen und skurrilen Ergänzung für jeden Essensanlass.",
          },
        ],
        "key": "harvest-plate",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Includes 1 plate","de-DE":"- Enthält 1 Teller","en-US":"- Includes 1 plate"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"White:#FFFFFF","de-DE":"Weiß:#FFFFFF","en-US":"White:#FFFFFF"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3812,
                "width": 4421,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Harvest_Plate-1.1.jpeg",
            },
          ],
          "key": "harvestPlate01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1399EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 1399,
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
              "key": "1399GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 1399,
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
              "key": "1399USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 1399,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "HP-01",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Harvest Plate",
          },
          {
            "locale": "en-GB",
            "value": "Harvest Plate",
          },
          {
            "locale": "de-DE",
            "value": "Ernteplatte",
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
            "locale": "en-US",
            "value": "harvest-plate",
          },
          {
            "locale": "en-GB",
            "value": "harvest-plate",
          },
          {
            "locale": "de-DE",
            "value": "ernteplatte",
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
