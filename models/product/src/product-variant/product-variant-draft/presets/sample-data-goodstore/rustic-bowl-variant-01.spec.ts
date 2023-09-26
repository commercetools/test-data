import type { TProductVariantDraft } from '../../../types';
import rusticBowlVariant01 from './rustic-bowl-variant-01';
describe(`with rusticBowlVariant01 preset`, () => {
  it('should return a sample rusticBowlVariant01 product preset', () => {
    const rusticBowlVariant01Preset =
      rusticBowlVariant01().build<TProductVariantDraft>();
    expect(rusticBowlVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Enthält 1 Schüssel",
              "en-GB": "- Includes 1 bowl",
              "en-US": "- Includes 1 bowl",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Diese quadratische Holzschale ist vielseitig und kann für eine Vielzahl von Zwecken verwendet werden, vom Servieren von Salaten und Snacks bis hin zum Aufbewahren von Obst und Gemüse. Es ist ideal für ungezwungene oder rustikale Speiseumgebungen und kann jedem Tisch einen Hauch von Wärme und natürlicher Schönheit verleihen.  Die quadratische Holzschale ist eine praktische und stilvolle Wahl zum Servieren und Aufbewahren von Speisen. Seine natürliche Schönheit und Langlebigkeit machen es zu einer beliebten Wahl für viele verschiedene Arten von Küchen und Anlässen.",
              "en-GB": "This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.  The square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.",
              "en-US": "This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.  The square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3280,
              "w": 5105,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Rustic%20Bowl-eVQClQh7.jpeg",
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
              "centAmount": 199,
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
              "centAmount": 199,
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
              "centAmount": 199,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "RB-01",
      }
    `);
  });
});
