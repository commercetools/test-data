import type { TProductDraft } from '../../../types';
import minimalistCedarNightstand from './minimalist-cedar-nightstand';

describe(`with minimalistCedarNightstand preset`, () => {
  it(`should return a minimalistCedarNightstand preset`, () => {
    const minimalistCedarNightstandPreset =
      minimalistCedarNightstand().build<TProductDraft>();
    expect(minimalistCedarNightstandPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "tables",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          },
          {
            "key": "the-minimalist",
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
        "key": "minimalist-cedar-nightstand",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "product-description",
    "value": {
      "en-GB": "The minimalist cedar nightstand is designed to provide a simple and functional surface for placing items next to a bed. The nightstand features a clean and sleek design with minimal decorative elements, in keeping with the minimalist aesthetic.  The nightstand is made from natural cedar wood, which is known for its durability, resistance to decay, and attractive grain patterns. The wood is finished with a light stain or clear coating to bring out the natural beauty of the wood.  Overall, a minimalist cedar nightstand is a stylish and functional addition to any bedroom. Its clean and simple design complements a variety of decor styles, and the natural beauty of the cedar wood adds warmth and texture to the space.",
      "en-US": "The minimalist cedar nightstand is designed to provide a simple and functional surface for placing items next to a bed. The nightstand features a clean and sleek design with minimal decorative elements, in keeping with the minimalist aesthetic.  The nightstand is made from natural cedar wood, which is known for its durability, resistance to decay, and attractive grain patterns. The wood is finished with a light stain or clear coating to bring out the natural beauty of the wood.  Overall, a minimalist cedar nightstand is a stylish and functional addition to any bedroom. Its clean and simple design complements a variety of decor styles, and the natural beauty of the cedar wood adds warmth and texture to the space.",
      "de-DE": "Der minimalistische Nachttisch aus Zedernholz wurde entwickelt, um eine einfache und funktionale Oberfläche für die Platzierung von Gegenständen neben einem Bett zu bieten. Der Nachttisch verfügt über ein klares und schlankes Design mit minimalen dekorativen Elementen, die der minimalistischen Ästhetik entsprechen.  Der Nachttisch ist aus natürlichem Zedernholz gefertigt, das für seine Haltbarkeit, Fäulnisbeständigkeit und attraktive Maserung bekannt ist. Das Holz wird mit einer leichten Beize oder einer klaren Beschichtung versehen, um die natürliche Schönheit des Holzes hervorzuheben.  Insgesamt ist ein minimalistischer Nachttisch aus Zedernholz eine stilvolle und funktionale Ergänzung für jedes Schlafzimmer. Sein klares und einfaches Design ergänzt eine Vielzahl von Einrichtungsstilen, und die natürliche Schönheit des Zedernholzes verleiht dem Raum Wärme und Textur."
    }
  },
  {
    "name": "finishlabel",
    "value": {
      "en-GB": "Cedar",
      "de-DE": "Zeder",
      "en-US": "Cedar"
    }
  },
  {
    "name": "color-filter",
    "value": {
      "key": "#808080",
      "label": {
        "de-DE": "Grau",
        "en-GB": "Gray",
        "en-US": "Gray"
      }
    }
  },
  {
    "name": "finish",
    "value": {
      "en-GB": "#8C9585",
      "de-DE": "#8C9585",
      "en-US": "#8C9585"
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532428984-nJKPXWcM.jpeg",
    "dimensions": {
      "w": 4011,
      "h": 6016
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532428985-2CMGhCT8.jpeg",
    "dimensions": {
      "w": 4011,
      "h": 6016
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532429244-e0M2rOCa.jpeg",
    "dimensions": {
      "w": 4011,
      "h": 6016
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
      "centAmount": 7900,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 7900,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 7900,
      "fractionDigits": 2
    },
    "country": "US"
  }
]
,
        },
      "metaDescription": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "name": {
            "de-DE": "Minimalistischer Nachttisch aus Zedernholz",
            "en-GB": "Minimalist Cedar Nightstand",
            "en-US": "Minimalist Cedar Nightstand"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "minimalistischer-nachttisch-aus-zedernholz",
            "en-GB": "minimalist-cedar-nightstand",
            "en-US": "minimalist-cedar-nightstand"
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
