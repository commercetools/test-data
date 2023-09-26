import type { TProductVariantDraft } from '../../../types';
import modernBookcaseVariant01 from './modern-bookcase-variant-01';
describe(`with modernBookcaseVariant01 preset`, () => {
  it('should return a sample modernBookcaseVariant01 product preset', () => {
    const modernBookcaseVariant01Preset =
      modernBookcaseVariant01().build<TProductVariantDraft>();
    expect(modernBookcaseVariant01Preset).toMatchInlineSnapshot(`
      {
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
            "name": "product-description",
            "value": {
              "de-DE": "Dieses moderne Bücherregal hat ein schlichtes und elegantes Aussehen, das sich gut in modernes Dekor einfügt. Es hat klare Linien. Das Bücherregal ist aus Holz und hat eine Mahagoni-Oberfläche.  Die Regale sind offen und geräumig und bieten ausreichend Platz zum Aufbewahren und Präsentieren von Büchern, Dekorationsgegenständen und anderen Gegenständen.  Neben seinem funktionalen Zweck dient ein minimalistisches Bücherregal auch als dekoratives Möbelstück. Es ist so konzipiert, dass es sich nahtlos in seine Umgebung einfügt, ohne zu viel Aufmerksamkeit auf sich zu ziehen. Als solches ist es eine ausgezeichnete Wahl für diejenigen, die eine stilvolle und dennoch unauffällige Aufbewahrungslösung suchen.",
              "en-GB": "This Modern bookcase is designed with a simple and sleek look that blends well with modern decor. It has clean lines. The bookcase is made of wood and has a mahogany finish.  The shelves are open and spacious, providing ample space to store and display books, decorative objects, and other items.  In addition to its functional purpose, a minimalist bookcase also serves as a decorative piece of furniture. It is designed to blend seamlessly with its surroundings, without drawing too much attention to itself. As such, it is an excellent choice for those who want a stylish yet unobtrusive storage solution.",
              "en-US": "This Modern bookcase is designed with a simple and sleek look that blends well with modern decor. It has clean lines. The bookcase is made of wood and has a mahogany finish.  The shelves are open and spacious, providing ample space to store and display books, decorative objects, and other items.  In addition to its functional purpose, a minimalist bookcase also serves as a decorative piece of furniture. It is designed to blend seamlessly with its surroundings, without drawing too much attention to itself. As such, it is an excellent choice for those who want a stylish yet unobtrusive storage solution.",
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
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Nussbaum",
              "en-GB": "Walnut",
              "en-US": "Walnut",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#9C5933",
              "en-GB": "#9C5933",
              "en-US": "#9C5933",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4600,
              "w": 2760,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_37229518-AEI6yZwz.jpeg",
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
              "centAmount": 29900,
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
              "centAmount": 29900,
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
              "centAmount": 29900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "MB-0973",
      }
    `);
  });
});
