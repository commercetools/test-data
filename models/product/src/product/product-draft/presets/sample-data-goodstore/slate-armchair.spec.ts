import type { TProductDraft } from '../../../types';
import slateArmchair from './slate-armchair';

describe(`with slateArmchair preset`, () => {
  it(`should return a slateArmchair preset`, () => {
    const slateArmchairPreset = slateArmchair().build<TProductDraft>();
    expect(slateArmchairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "key": "slate-armchair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "product-description",
    "value": {
      "de-DE": "Ein minimalistischer Stuhl mit Ottomane ist ein schlankes und schlichtes Design, das klare Linien und Funktionalität betont. Die Ottomane ist ein passendes Stück und bietet dem Benutzer einen Ort, an dem er seine Füße abstützen und sich entspannen kann. Die Polsterung ist minimal, mit neutralen Farben und einfachen Mustern. Das Design ist von der modernen Ästhetik der Mitte des Jahrhunderts inspiriert, mit Fokus auf Schlichtheit und Funktionalität. Das Ergebnis ist ein bequemer und stilvoller Stuhl, der sich nahtlos in eine Vielzahl von Einrichtungsstilen einfügt.",
      "en-GB": "A minimalist chair with ottoman is a sleek and simple design that emphasizes clean lines and functionality. The ottoman is a matching piece, providing a place for the user to prop up their feet and relax. The upholstery is minimal, with neutral colors and simple patterns. The design is inspired by mid-century modern aesthetics, with a focus on simplicity and functionality. The result is a comfortable and stylish chair that fits seamlessly into a variety of interior design styles.",
      "en-US": "A minimalist chair with ottoman is a sleek and simple design that emphasizes clean lines and functionality. The ottoman is a matching piece, providing a place for the user to prop up their feet and relax. The upholstery is minimal, with neutral colors and simple patterns. The design is inspired by mid-century modern aesthetics, with a focus on simplicity and functionality. The result is a comfortable and stylish chair that fits seamlessly into a variety of interior design styles."
    }
  },
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Includes ottoman",
      "de-DE": "- Inklusive Ottomane",
      "en-US": "- Includes ottoman"
    }
  },
  {
    "name": "color",
    "value": {
      "en-GB": "#989898",
      "de-DE": "#989898",
      "en-US": "#989898"
    }
  },
  {
    "name": "colorlabel",
    "value": {
      "en-GB": "Slate",
      "de-DE": "Schiefer",
      "en-US": "Slate"
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_209944147-LGzWeBna.jpeg",
    "dimensions": {
      "w": 5009,
      "h": 4004
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_220496250-oK34fG4v.jpeg",
    "dimensions": {
      "w": 5544,
      "h": 3498
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
      "centAmount": 59900,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 59900,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 59900,
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
            "de-DE": "Sessel aus Schiefer",
            "en-GB": "Slate Armchair",
            "en-US": "Slate Armchair"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "sessel-aus-schiefer",
            "en-GB": "slate-armchair",
            "en-US": "slate-armchair"
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
