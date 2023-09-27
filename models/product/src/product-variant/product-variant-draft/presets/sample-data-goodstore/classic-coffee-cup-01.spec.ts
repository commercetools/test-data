import type { TProductVariantDraft } from '../../../types';
import classicCoffeeCup01 from './classic-coffee-cup-01';

describe(`with classicCoffeeCup01 preset`, () => {
  it(`should return a classicCoffeeCup01 preset`, () => {
    const classicCoffeeCup01Preset =
      classicCoffeeCup01().build<TProductVariantDraft>();
    expect(classicCoffeeCup01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Inklusive passender Untertasse
      - Das Set enthält 4 Tassen und Untertassen",
              "en-GB": "- Includes a matching saucer
      - Set includes 4 cups and saucers",
              "en-US": "- Includes a matching saucer
      - Set includes 4 cups and saucers",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Die Classic Coffee Cup ist ein klassisches Trinkgefäß, das zum Servieren von Kaffee in formellen Umgebungen verwendet werden kann. Die Tasse besteht aus Keramik oder Porzellan und hat eine zylindrische Form mit einem Henkel an einer Seite. Es kann schlicht im Design sein und hat eine Kapazität von etwa 6 bis 8 Unzen.  Die Untertasse ist ein kleiner Teller, der rund ist und dazu dient, die Kaffeetasse zu halten, wenn sie nicht verwendet wird. Es besteht aus dem gleichen Material wie die Tasse. Die Untertasse hat einen Rand oder Rand, der leicht erhöht ist, um ein Verschütten zu verhindern.  Beim Servieren von Kaffee in einer Tasse mit Untertasse ist es üblich, auch einen kleinen Löffel zum Umrühren des Kaffees und zum Hinzufügen von Zucker oder Sahne bereitzustellen. Insgesamt ist eine Kaffeetasse mit Untertasse eine klassische und elegante Art, eine Tasse Kaffee zu genießen, und wird oft mit Raffinesse und Raffinesse in Verbindung gebracht.",
              "en-GB": "The Classic Coffee Cup is a classic drinking vessel that can be used to serve coffee in formal settings. The cup is made of ceramic or porcelain and has a cylindrical shape with a handle on one side. It may be plain in design and has a capacity of around 6 to 8 ounces.  The saucer is a small plate that is round and is designed to hold the coffee cup when it is not in use. It is made of the same material as the cup. The saucer has a rim or edge that is slightly raised to help prevent spills.  When serving coffee in a cup with a saucer, it is common to also provide a small spoon for stirring the coffee and adding sugar or cream. Overall, a coffee cup with a saucer is a classic and elegant way to enjoy a cup of coffee, and is often associated with sophistication and refinement.",
              "en-US": "The Classic Coffee Cup is a classic drinking vessel that can be used to serve coffee in formal settings. The cup is made of ceramic or porcelain and has a cylindrical shape with a handle on one side. It may be plain in design and has a capacity of around 6 to 8 ounces.  The saucer is a small plate that is round and is designed to hold the coffee cup when it is not in use. It is made of the same material as the cup. The saucer has a rim or edge that is slightly raised to help prevent spills.  When serving coffee in a cup with a saucer, it is common to also provide a small spoon for stirring the coffee and adding sugar or cream. Overall, a coffee cup with a saucer is a classic and elegant way to enjoy a cup of coffee, and is often associated with sophistication and refinement.",
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
              "h": 4000,
              "w": 6000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Classic%20Coffee%20Cup-WKYAx6HB.jpeg",
          },
          {
            "dimensions": {
              "h": 3840,
              "w": 4153,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_549486132-p88nilwV.jpeg",
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
              "centAmount": 6999,
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
              "centAmount": 6999,
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
              "centAmount": 6999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CCC-09",
      }
    `);
  });

  it(`should return a classicCoffeeCup01 preset when built for graphql`, () => {
    const classicCoffeeCup01PresetGraphql =
      classicCoffeeCup01().buildGraphql<TProductVariantDraft>();
    expect(classicCoffeeCup01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes a matching saucer\\n- Set includes 4 cups and saucers","de-DE":"- Inklusive passender Untertasse\\n- Das Set enthält 4 Tassen und Untertassen","en-US":"- Includes a matching saucer\\n- Set includes 4 cups and saucers"}",
          },
          {
            "name": "product-description",
            "value": "{"en-GB":"The Classic Coffee Cup is a classic drinking vessel that can be used to serve coffee in formal settings. The cup is made of ceramic or porcelain and has a cylindrical shape with a handle on one side. It may be plain in design and has a capacity of around 6 to 8 ounces.  The saucer is a small plate that is round and is designed to hold the coffee cup when it is not in use. It is made of the same material as the cup. The saucer has a rim or edge that is slightly raised to help prevent spills.  When serving coffee in a cup with a saucer, it is common to also provide a small spoon for stirring the coffee and adding sugar or cream. Overall, a coffee cup with a saucer is a classic and elegant way to enjoy a cup of coffee, and is often associated with sophistication and refinement.","en-US":"The Classic Coffee Cup is a classic drinking vessel that can be used to serve coffee in formal settings. The cup is made of ceramic or porcelain and has a cylindrical shape with a handle on one side. It may be plain in design and has a capacity of around 6 to 8 ounces.  The saucer is a small plate that is round and is designed to hold the coffee cup when it is not in use. It is made of the same material as the cup. The saucer has a rim or edge that is slightly raised to help prevent spills.  When serving coffee in a cup with a saucer, it is common to also provide a small spoon for stirring the coffee and adding sugar or cream. Overall, a coffee cup with a saucer is a classic and elegant way to enjoy a cup of coffee, and is often associated with sophistication and refinement.","de-DE":"Die Classic Coffee Cup ist ein klassisches Trinkgefäß, das zum Servieren von Kaffee in formellen Umgebungen verwendet werden kann. Die Tasse besteht aus Keramik oder Porzellan und hat eine zylindrische Form mit einem Henkel an einer Seite. Es kann schlicht im Design sein und hat eine Kapazität von etwa 6 bis 8 Unzen.  Die Untertasse ist ein kleiner Teller, der rund ist und dazu dient, die Kaffeetasse zu halten, wenn sie nicht verwendet wird. Es besteht aus dem gleichen Material wie die Tasse. Die Untertasse hat einen Rand oder Rand, der leicht erhöht ist, um ein Verschütten zu verhindern.  Beim Servieren von Kaffee in einer Tasse mit Untertasse ist es üblich, auch einen kleinen Löffel zum Umrühren des Kaffees und zum Hinzufügen von Zucker oder Sahne bereitzustellen. Insgesamt ist eine Kaffeetasse mit Untertasse eine klassische und elegante Art, eine Tasse Kaffee zu genießen, und wird oft mit Raffinesse und Raffinesse in Verbindung gebracht."}",
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
              "height": 4000,
              "width": 6000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Classic%20Coffee%20Cup-WKYAx6HB.jpeg",
          },
          {
            "dimensions": {
              "height": 3840,
              "width": 4153,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_549486132-p88nilwV.jpeg",
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
                "centAmount": 6999,
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
                "centAmount": 6999,
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
                "centAmount": 6999,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CCC-09",
      }
    `);
  });
});
