import type { TProductVariantDraft } from '../../../types';
import charcoalChairVariant01 from './charcoal-chair-variant-01';
describe(`with charcoalChairVariant01 preset`, () => {
  it('should return a sample charcoalChairVariant01 product preset', () => {
    const charcoalChairVariant01Preset =
      charcoalChairVariant01().build<TProductVariantDraft>();
    expect(charcoalChairVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Beinhaltet 1 Stuhl",
              "en-GB": "- Includes 1 chair",
              "en-US": "- Includes 1 chair",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Dieser Stuhl mit Lederbezug verfügt über einen stabilen Rahmen und Beine. Sitzfläche und Rückenlehne sind mit hochwertigem Leder bezogen, das je nach Ausführung glatt oder strukturiert sein kann. Das Leder wird straff über eine Polsterschicht gespannt, um der auf dem Stuhl sitzenden Person Komfort und Halt zu bieten.  Der Stuhl hat eine hohe Rückenlehne, was ihn ideal für das Esszimmer oder ein Arbeitszimmer macht.  Insgesamt ist ein Stuhl mit Lederpolsterung typischerweise elegant und modern im Design und bietet eine komfortable und stilvolle Sitzgelegenheit für jeden Raum.",
              "en-GB": "This chair with leather upholstery features a sturdy frame and legs. The seat and backrest are covered in high-quality leather, which may be smooth or textured depending on the design. The leather is stretched taut over a layer of padding to provide comfort and support for the person sitting in the chair.  The chair has a high backrest making it ideal for the dining room or a study room.  Overall, a chair with leather upholstery is typically sleek and modern in design, providing a comfortable and stylish seating option for any room.",
              "en-US": "This chair with leather upholstery features a sturdy frame and legs. The seat and backrest are covered in high-quality leather, which may be smooth or textured depending on the design. The leather is stretched taut over a layer of padding to provide comfort and support for the person sitting in the chair.  The chair has a high backrest making it ideal for the dining room or a study room.  Overall, a chair with leather upholstery is typically sleek and modern in design, providing a comfortable and stylish seating option for any room.",
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
              "de-DE": "Holzkohle",
              "en-GB": "Charcoal",
              "en-US": "Charcoal",
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
            "name": "finishlabel",
            "value": {
              "de-DE": "Eiche",
              "en-GB": "Oak",
              "en-US": "Oak",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#E2C897",
              "en-GB": "#E2C897",
              "en-US": "#E2C897",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5309,
              "w": 3300,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532246579-uvZeDfRx.jpeg",
          },
          {
            "dimensions": {
              "h": 5906,
              "w": 5906,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532246581-FUm1-Kr_.jpeg",
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
              "centAmount": 9900,
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
              "centAmount": 9900,
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
              "centAmount": 9900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CCH-093",
      }
    `);
  });
});
