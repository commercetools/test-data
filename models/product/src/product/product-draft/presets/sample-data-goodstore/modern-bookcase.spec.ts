import type { TProductDraft } from '../../../types';
import modernBookcase from './modern-bookcase';

describe(`with modernBookcase preset`, () => {
  it(`should return a modernBookcase preset`, () => {
    const modernBookcasePreset = modernBookcase().build<TProductDraft>();
    expect(modernBookcasePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "new-arrivals",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          },
          {
            "key": "the-modernist",
            "typeId": "category",
          },
          {
            "key": "storage--tables",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "key": "modern-bookcase",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Assembly included in delivery",
      "de-DE": "- Montage im Lieferumfang enthalten",
      "en-US": "- Assembly included in delivery"
    }
  },
  {
    "name": "product-description",
    "value": {
      "de-DE": "Dieses moderne Bücherregal hat ein schlichtes und elegantes Aussehen, das sich gut in modernes Dekor einfügt. Es hat klare Linien. Das Bücherregal ist aus Holz und hat eine Mahagoni-Oberfläche.  Die Regale sind offen und geräumig und bieten ausreichend Platz zum Aufbewahren und Präsentieren von Büchern, Dekorationsgegenständen und anderen Gegenständen.  Neben seinem funktionalen Zweck dient ein minimalistisches Bücherregal auch als dekoratives Möbelstück. Es ist so konzipiert, dass es sich nahtlos in seine Umgebung einfügt, ohne zu viel Aufmerksamkeit auf sich zu ziehen. Als solches ist es eine ausgezeichnete Wahl für diejenigen, die eine stilvolle und dennoch unauffällige Aufbewahrungslösung suchen.",
      "en-GB": "This Modern bookcase is designed with a simple and sleek look that blends well with modern decor. It has clean lines. The bookcase is made of wood and has a mahogany finish.  The shelves are open and spacious, providing ample space to store and display books, decorative objects, and other items.  In addition to its functional purpose, a minimalist bookcase also serves as a decorative piece of furniture. It is designed to blend seamlessly with its surroundings, without drawing too much attention to itself. As such, it is an excellent choice for those who want a stylish yet unobtrusive storage solution.",
      "en-US": "This Modern bookcase is designed with a simple and sleek look that blends well with modern decor. It has clean lines. The bookcase is made of wood and has a mahogany finish.  The shelves are open and spacious, providing ample space to store and display books, decorative objects, and other items.  In addition to its functional purpose, a minimalist bookcase also serves as a decorative piece of furniture. It is designed to blend seamlessly with its surroundings, without drawing too much attention to itself. As such, it is an excellent choice for those who want a stylish yet unobtrusive storage solution."
    }
  },
  {
    "name": "color-filter",
    "value": {
      "key": "#D2B48C",
      "label": {
        "de-DE": "Bräunen",
        "en-GB": "Tan",
        "en-US": "Tan"
      }
    }
  },
  {
    "name": "finishlabel",
    "value": {
      "en-GB": "Walnut",
      "de-DE": "Nussbaum",
      "en-US": "Walnut"
    }
  },
  {
    "name": "finish",
    "value": {
      "en-GB": "#9C5933",
      "de-DE": "#9C5933",
      "en-US": "#9C5933"
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_37229518-AEI6yZwz.jpeg",
    "dimensions": {
      "w": 2760,
      "h": 4600
    }
  }
]
,
          "sku": undefined,
          "prices": [
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "EUR",
      "centAmount": 29900,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 29900,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 29900,
      "fractionDigits": 2
    },
    "country": "US"
  }
]
,
        },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "name": {
            "de-DE": "Modernes Bücherregal",
            "en-GB": "Modern Bookcase",
            "en-US": "Modern Bookcase"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "modernes-bcherregal",
            "en-GB": "modern-bookcase",
            "en-US": "modern-bookcase"
          },
        "taxCategory": {
          "key": "standard-tax-category",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
