import type { TProductVariantDraft } from '../../../types';
import rusticCountryQueenBedVariant01 from './rustic-country-queen-bed-variant-01';
describe(`with rusticCountryQueenBedVariant01 preset`, () => {
  it('should return a sample rusticCountryQueenBedVariant01 product preset', () => {
    const rusticCountryQueenBedVariant01Preset =
      rusticCountryQueenBedVariant01().build<TProductVariantDraft>();
    expect(rusticCountryQueenBedVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": {
              "de-DE": "tan",
              "en-GB": "tan",
              "en-US": "tan",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Bräunen",
              "en-GB": "Tan",
              "en-US": "Tan",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Briarsmoke",
              "en-GB": "Briarsmoke",
              "en-US": "Briarsmoke",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "rosybrown",
              "en-GB": "rosybrown",
              "en-US": "rosybrown",
            },
          },
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Leather upholstery
      - Standard Queen size
      - Assembly on site",
              "en-GB": "- Leather upholstery
      - Standard Queen size
      - Assembly on site",
              "en-US": "- Leather upholstery
      - Standard Queen size
      - Assembly on site",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein rustikales Queensize-Bett mit einem Kopfteil aus Wildleder ist ein schönes und komfortables Möbelstück, das jedem Schlafzimmer Wärme und Struktur verleiht. Das Bett verfügt über einen stabilen Holzrahmen und einen Vintage-Look, der sowohl rustikal als auch einladend ist.  Das Kopfteil des Bettes ist mit weichem Wildleder bezogen und bietet eine bequeme und stilvolle Rückenlehne zum Lesen oder Entspannen im Bett. Das Wildledermaterial verleiht dem Bett auch ein taktiles und luxuriöses Gefühl und schafft eine gemütliche und einladende Atmosphäre im Schlafzimmer.  Das Bett ist mit einem stabilen Holzlattenrost ausgestattet, das die Matratze hervorragend stützt und für einen komfortablen und erholsamen Schlaf sorgt.  Das rustikale Queensbett mit Kopfteil aus Wildleder ist sowohl funktional als auch stilvoll gestaltet. Das Bett wird mit einer passenden Kommode geliefert, um ein zusammenhängendes und stilvolles Schlafzimmerdekor zu schaffen.  Insgesamt ist ein rustikales Queensize-Bett mit einem Kopfteil aus Wildleder ein schönes und komfortables Möbelstück, das jedem Schlafzimmer Wärme und Textur verleihen kann. Seine robuste Konstruktion, sein komfortables Design und sein charmanter rustikaler Stil machen ihn zu einer funktionalen und schönen Ergänzung für jedes Zuhause mit einem rustikalen oder ländlichen Einrichtungsstil.",
              "en-GB": "A rustic queen bed with a suede headboard is a beautiful and comfortable piece of furniture that can add warmth and texture to any bedroom. The bed features a sturdy wooden frame and a vintage look that is both rustic and inviting.  The headboard of the bed is upholstered in soft suede fabric, providing a comfortable and stylish backrest for reading or relaxing in bed. The suede material also adds a tactile and luxurious feel to the bed, creating a cozy and inviting atmosphere in the bedroom.  The bed comes with a sturdy wooden slat system that provides excellent support for the mattress and ensures a comfortable and restful night's sleep.  The rustic queen bed with a suede headboard is designed to be both functional and stylish. The bed comes with a matching dresser to create a cohesive and stylish bedroom decor.  Overall, a rustic queen bed with a suede headboard is a beautiful and comfortable piece of furniture that can add warmth and texture to any bedroom. Its sturdy construction, comfortable design, and charming rustic style make it a functional and beautiful addition to any home with a rustic or country decor style.",
              "en-US": "A rustic queen bed with a suede headboard is a beautiful and comfortable piece of furniture that can add warmth and texture to any bedroom. The bed features a sturdy wooden frame and a vintage look that is both rustic and inviting.  The headboard of the bed is upholstered in soft suede fabric, providing a comfortable and stylish backrest for reading or relaxing in bed. The suede material also adds a tactile and luxurious feel to the bed, creating a cozy and inviting atmosphere in the bedroom.  The bed comes with a sturdy wooden slat system that provides excellent support for the mattress and ensures a comfortable and restful night's sleep.  The rustic queen bed with a suede headboard is designed to be both functional and stylish. The bed comes with a matching dresser to create a cohesive and stylish bedroom decor.  Overall, a rustic queen bed with a suede headboard is a beautiful and comfortable piece of furniture that can add warmth and texture to any bedroom. Its sturdy construction, comfortable design, and charming rustic style make it a functional and beautiful addition to any home with a rustic or country decor style.",
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
              "h": 5000,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_321480725-j3db5-fj.jpeg",
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
              "centAmount": 329900,
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
              "centAmount": 329900,
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
              "centAmount": 329900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "RCQB-01",
      }
    `);
  });
});
