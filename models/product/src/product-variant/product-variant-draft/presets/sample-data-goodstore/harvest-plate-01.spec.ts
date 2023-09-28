import type { TProductVariantDraft } from '../../../types';
import harvestPlate01 from './harvest-plate-01';

describe(`with harvestPlate01 preset`, () => {
  it(`should return a harvestPlate01 preset`, () => {
    const harvestPlate01Preset = harvestPlate01().build<TProductVariantDraft>();
    expect(harvestPlate01Preset).toMatchInlineSnapshot(`
      {
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
            "name": "product-description",
            "value": {
              "de-DE": "Diese muschelförmige Servierplatte ist ideal zum Servieren von Meeresfrüchten wie Garnelen, Austern oder Sushi-Rollen, kann aber auch für andere Gerichte verwendet werden. Es ist eine beliebte Wahl für Strandpartys, Küstenrestaurants oder für diejenigen, die ihr Zuhause gerne mit nautischen Akzenten dekorieren. Insgesamt ist ein muschelförmiger Servierteller eine einzigartige und stilvolle Wahl zum Servieren von Speisen. Sein natürliches Aussehen und das vom Strand inspirierte Design machen es zu einer lustigen und skurrilen Ergänzung für jeden Essensanlass.",
              "en-GB": "This seashell-shaped serving plate is ideal for serving seafood, such as shrimp, oysters, or sushi rolls, but can also be used for other types of cuisine. It is a popular choice for beach-themed parties, coastal restaurants, or for those who enjoy decorating their home with nautical accents.  Overall, a seashell shaped serving plate is a unique and stylish choice for serving food. Its natural appearance and beach-inspired design make it a fun and whimsical addition to any dining occasion.",
              "en-US": "This seashell-shaped serving plate is ideal for serving seafood, such as shrimp, oysters, or sushi rolls, but can also be used for other types of cuisine. It is a popular choice for beach-themed parties, coastal restaurants, or for those who enjoy decorating their home with nautical accents.  Overall, a seashell shaped serving plate is a unique and stylish choice for serving food. Its natural appearance and beach-inspired design make it a fun and whimsical addition to any dining occasion.",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#FFF",
              "en-GB": "#FFF",
              "en-US": "#FFF",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Weiß",
              "en-GB": "White",
              "en-US": "White",
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
              "h": 3812,
              "w": 4421,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Harvest%20Plate-o05bpPh9.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
      }
    `);
  });

  it(`should return a harvestPlate01 preset when built for graphql`, () => {
    const harvestPlate01PresetGraphql =
      harvestPlate01().buildGraphql<TProductVariantDraft>();
    expect(harvestPlate01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes 1 plate","de-DE":"- Enthält 1 Teller","en-US":"- Includes 1 plate"}",
          },
          {
            "name": "product-description",
            "value": "{"en-GB":"This seashell-shaped serving plate is ideal for serving seafood, such as shrimp, oysters, or sushi rolls, but can also be used for other types of cuisine. It is a popular choice for beach-themed parties, coastal restaurants, or for those who enjoy decorating their home with nautical accents.  Overall, a seashell shaped serving plate is a unique and stylish choice for serving food. Its natural appearance and beach-inspired design make it a fun and whimsical addition to any dining occasion.","en-US":"This seashell-shaped serving plate is ideal for serving seafood, such as shrimp, oysters, or sushi rolls, but can also be used for other types of cuisine. It is a popular choice for beach-themed parties, coastal restaurants, or for those who enjoy decorating their home with nautical accents.  Overall, a seashell shaped serving plate is a unique and stylish choice for serving food. Its natural appearance and beach-inspired design make it a fun and whimsical addition to any dining occasion.","de-DE":"Diese muschelförmige Servierplatte ist ideal zum Servieren von Meeresfrüchten wie Garnelen, Austern oder Sushi-Rollen, kann aber auch für andere Gerichte verwendet werden. Es ist eine beliebte Wahl für Strandpartys, Küstenrestaurants oder für diejenigen, die ihr Zuhause gerne mit nautischen Akzenten dekorieren. Insgesamt ist ein muschelförmiger Servierteller eine einzigartige und stilvolle Wahl zum Servieren von Speisen. Sein natürliches Aussehen und das vom Strand inspirierte Design machen es zu einer lustigen und skurrilen Ergänzung für jeden Essensanlass."}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#FFF","de-DE":"#FFF","en-US":"#FFF"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"White","de-DE":"Weiß","en-US":"White"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#FFF","label":{"de-DE":"Weiss","en-GB":"White","en-US":"White"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3812,
              "width": 4421,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Harvest%20Plate-o05bpPh9.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
      }
    `);
  });
});
