import type { TProductVariantDraft } from '../../../types';
import slateArmchairVariant01 from './slate-armchair-variant-01';
describe(`with slateArmchairVariant01 preset`, () => {
  it('should return a sample slateArmchairVariant01 product preset', () => {
    const slateArmchairVariant01Preset =
      slateArmchairVariant01().build<TProductVariantDraft>();
    expect(slateArmchairVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein minimalistischer Stuhl mit Ottomane ist ein schlankes und schlichtes Design, das klare Linien und Funktionalität betont. Die Ottomane ist ein passendes Stück und bietet dem Benutzer einen Ort, an dem er seine Füße abstützen und sich entspannen kann. Die Polsterung ist minimal, mit neutralen Farben und einfachen Mustern. Das Design ist von der modernen Ästhetik der Mitte des Jahrhunderts inspiriert, mit Fokus auf Schlichtheit und Funktionalität. Das Ergebnis ist ein bequemer und stilvoller Stuhl, der sich nahtlos in eine Vielzahl von Einrichtungsstilen einfügt.",
              "en-GB": "A minimalist chair with ottoman is a sleek and simple design that emphasizes clean lines and functionality. The ottoman is a matching piece, providing a place for the user to prop up their feet and relax. The upholstery is minimal, with neutral colors and simple patterns. The design is inspired by mid-century modern aesthetics, with a focus on simplicity and functionality. The result is a comfortable and stylish chair that fits seamlessly into a variety of interior design styles.",
              "en-US": "A minimalist chair with ottoman is a sleek and simple design that emphasizes clean lines and functionality. The ottoman is a matching piece, providing a place for the user to prop up their feet and relax. The upholstery is minimal, with neutral colors and simple patterns. The design is inspired by mid-century modern aesthetics, with a focus on simplicity and functionality. The result is a comfortable and stylish chair that fits seamlessly into a variety of interior design styles.",
            },
          },
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Inklusive Ottomane",
              "en-GB": "- Includes ottoman",
              "en-US": "- Includes ottoman",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#989898",
              "en-GB": "#989898",
              "en-US": "#989898",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Schiefer",
              "en-GB": "Slate",
              "en-US": "Slate",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4004,
              "w": 5009,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_209944147-LGzWeBna.jpeg",
          },
          {
            "dimensions": {
              "h": 3498,
              "w": 5544,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_220496250-oK34fG4v.jpeg",
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
              "centAmount": 59900,
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
              "centAmount": 59900,
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
              "centAmount": 59900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "SARM-09",
      }
    `);
  });
});
