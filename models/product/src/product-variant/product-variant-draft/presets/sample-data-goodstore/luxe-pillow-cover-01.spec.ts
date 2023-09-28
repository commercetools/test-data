import type { TProductVariantDraft } from '../../../types';
import luxePillowCover01 from './luxe-pillow-cover-01';

describe(`with luxePillowCover01 preset`, () => {
  it(`should return a luxePillowCover01 preset`, () => {
    const luxePillowCover01Preset =
      luxePillowCover01().build<TProductVariantDraft>();
    expect(luxePillowCover01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "product-description",
            "value": {
              "de-DE": "Dieser luxuriöse Kissenbezug ist aus schwarzem Lammfell gefertigt. Shearling ist bekannt für seine Weichheit, Wärme und isolierenden Eigenschaften.  Der Kissenbezug ist so konzipiert, dass er über ein Kissen in Standardgröße passt, normalerweise etwa 18 Zoll im Quadrat. Es hat eine quadratische Form und eine tiefschwarze Farbe, die eine Vielzahl von Einrichtungsstilen und Farbschemata ergänzen kann.  Der Shearling-Stoff hat eine plüschige und flauschige Textur, die sich unglaublich weich anfühlt. Es bietet eine gemütliche und warme Oberfläche zum Schlafen oder Faulenzen, was es zu einer beliebten Wahl für die kälteren Monate macht.  Der Kissenbezug wird oft wegen seiner dekorativen und luxuriösen Eigenschaften sowie wegen seiner praktischen und funktionalen Vorteile verwendet. Es kann einem Bett, Sofa oder Akzentstuhl einen Hauch von Textur und visuellem Interesse verleihen und gleichzeitig eine bequeme und stützende Oberfläche für Kopf und Nacken bieten.  Das Shearling-Gewebe ist von Natur aus wasser- und schmutzabweisend und lässt sich leicht mit einem feuchten Tuch oder Schwamm reinigen. Es sollte regelmäßig an der Luft getrocknet und aufgelockert werden, um seine Form und Textur zu erhalten.  Insgesamt ist ein schwarzer Lammfell-Kissenbezug ein stilvolles und bequemes Accessoire, das den Komfort und Stil jedes Raums im Haus verbessern kann und gleichzeitig einen praktischen und funktionellen Nutzen bietet.",
              "en-GB": "This Luxe Pillow Cover is made of black shearling. Shearling is known for its softness, warmth, and insulating properties.  The pillow cover is designed to fit over a standard size pillow, usually around 18 inches square. It features a square shape and a deep black color that can complement a variety of decor styles and color schemes.  The shearling fabric has a plush and fluffy texture that is incredibly soft to the touch. It provides a cozy and warm surface for sleeping or lounging, making it a popular choice for colder months.  The pillow cover is often used for its decorative and luxurious features, as well as for its practical and functional benefits. It can add a touch of texture and visual interest to a bed, sofa, or accent chair, while also providing a comfortable and supportive surface for the head and neck.  The shearling fabric is naturally resistant to water and stains, and can be easily cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, a black shearling pillow cover is a stylish and comfortable accessory that can enhance the comfort and style of any room in the home, while also providing a practical and functional benefit.",
              "en-US": "This Luxe Pillow Cover is made of black shearling. Shearling is known for its softness, warmth, and insulating properties.  The pillow cover is designed to fit over a standard size pillow, usually around 18 inches square. It features a square shape and a deep black color that can complement a variety of decor styles and color schemes.  The shearling fabric has a plush and fluffy texture that is incredibly soft to the touch. It provides a cozy and warm surface for sleeping or lounging, making it a popular choice for colder months.  The pillow cover is often used for its decorative and luxurious features, as well as for its practical and functional benefits. It can add a touch of texture and visual interest to a bed, sofa, or accent chair, while also providing a comfortable and supportive surface for the head and neck.  The shearling fabric is naturally resistant to water and stains, and can be easily cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, a black shearling pillow cover is a stylish and comfortable accessory that can enhance the comfort and style of any room in the home, while also providing a practical and functional benefit.",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#000",
              "label": {
                "de-DE": "Schwarz",
                "en-GB": "Black",
                "en-US": "Black",
              },
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#000",
              "en-GB": "#000",
              "en-US": "#000",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Schwarz",
              "en-GB": "Black",
              "en-US": "Black",
            },
          },
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Waschmaschinenfest
      - Kissen nicht im Lieferumfang enthalten",
              "en-GB": "- Machine washable
      - Pillow not included",
              "en-US": "- Machine washable
      - Pillow not included",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4082,
              "w": 6123,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Luxe%20Pillow%20Cover-Sr7N84uF.jpeg",
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
              "centAmount": 2599,
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
              "centAmount": 2599,
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
              "centAmount": 2599,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "LPC-011",
      }
    `);
  });

  it(`should return a luxePillowCover01 preset when built for graphql`, () => {
    const luxePillowCover01PresetGraphql =
      luxePillowCover01().buildGraphql<TProductVariantDraft>();
    expect(luxePillowCover01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "product-description",
            "value": "{"de-DE":"Dieser luxuriöse Kissenbezug ist aus schwarzem Lammfell gefertigt. Shearling ist bekannt für seine Weichheit, Wärme und isolierenden Eigenschaften.  Der Kissenbezug ist so konzipiert, dass er über ein Kissen in Standardgröße passt, normalerweise etwa 18 Zoll im Quadrat. Es hat eine quadratische Form und eine tiefschwarze Farbe, die eine Vielzahl von Einrichtungsstilen und Farbschemata ergänzen kann.  Der Shearling-Stoff hat eine plüschige und flauschige Textur, die sich unglaublich weich anfühlt. Es bietet eine gemütliche und warme Oberfläche zum Schlafen oder Faulenzen, was es zu einer beliebten Wahl für die kälteren Monate macht.  Der Kissenbezug wird oft wegen seiner dekorativen und luxuriösen Eigenschaften sowie wegen seiner praktischen und funktionalen Vorteile verwendet. Es kann einem Bett, Sofa oder Akzentstuhl einen Hauch von Textur und visuellem Interesse verleihen und gleichzeitig eine bequeme und stützende Oberfläche für Kopf und Nacken bieten.  Das Shearling-Gewebe ist von Natur aus wasser- und schmutzabweisend und lässt sich leicht mit einem feuchten Tuch oder Schwamm reinigen. Es sollte regelmäßig an der Luft getrocknet und aufgelockert werden, um seine Form und Textur zu erhalten.  Insgesamt ist ein schwarzer Lammfell-Kissenbezug ein stilvolles und bequemes Accessoire, das den Komfort und Stil jedes Raums im Haus verbessern kann und gleichzeitig einen praktischen und funktionellen Nutzen bietet.","en-GB":"This Luxe Pillow Cover is made of black shearling. Shearling is known for its softness, warmth, and insulating properties.  The pillow cover is designed to fit over a standard size pillow, usually around 18 inches square. It features a square shape and a deep black color that can complement a variety of decor styles and color schemes.  The shearling fabric has a plush and fluffy texture that is incredibly soft to the touch. It provides a cozy and warm surface for sleeping or lounging, making it a popular choice for colder months.  The pillow cover is often used for its decorative and luxurious features, as well as for its practical and functional benefits. It can add a touch of texture and visual interest to a bed, sofa, or accent chair, while also providing a comfortable and supportive surface for the head and neck.  The shearling fabric is naturally resistant to water and stains, and can be easily cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, a black shearling pillow cover is a stylish and comfortable accessory that can enhance the comfort and style of any room in the home, while also providing a practical and functional benefit.","en-US":"This Luxe Pillow Cover is made of black shearling. Shearling is known for its softness, warmth, and insulating properties.  The pillow cover is designed to fit over a standard size pillow, usually around 18 inches square. It features a square shape and a deep black color that can complement a variety of decor styles and color schemes.  The shearling fabric has a plush and fluffy texture that is incredibly soft to the touch. It provides a cozy and warm surface for sleeping or lounging, making it a popular choice for colder months.  The pillow cover is often used for its decorative and luxurious features, as well as for its practical and functional benefits. It can add a touch of texture and visual interest to a bed, sofa, or accent chair, while also providing a comfortable and supportive surface for the head and neck.  The shearling fabric is naturally resistant to water and stains, and can be easily cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, a black shearling pillow cover is a stylish and comfortable accessory that can enhance the comfort and style of any room in the home, while also providing a practical and functional benefit."}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#000","label":{"de-DE":"Schwarz","en-GB":"Black","en-US":"Black"}}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#000","de-DE":"#000","en-US":"#000"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}",
          },
          {
            "name": "productspec",
            "value": "{"en-GB":"- Machine washable\\n- Pillow not included","de-DE":"- Waschmaschinenfest\\n- Kissen nicht im Lieferumfang enthalten","en-US":"- Machine washable\\n- Pillow not included"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4082,
              "width": 6123,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Luxe%20Pillow%20Cover-Sr7N84uF.jpeg",
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
                "centAmount": 2599,
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
                "centAmount": 2599,
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
                "centAmount": 2599,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "LPC-011",
      }
    `);
  });
});
