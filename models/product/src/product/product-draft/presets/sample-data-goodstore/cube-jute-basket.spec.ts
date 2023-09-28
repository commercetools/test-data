import type { TProductDraft } from '../../../types';
import cubeJuteBasket from './cube-jute-basket';

describe(`with cubeJuteBasket preset`, () => {
  it(`should return a cubeJuteBasket preset`, () => {
    const cubeJuteBasketPreset = cubeJuteBasket().build<TProductDraft>();
    expect(cubeJuteBasketPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "home-accents",
            "typeId": "category",
          },
          {
            "key": "room-decor",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "key": "cube-jute-basket",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Jute\n- Preassembled\n- 1ft x 1ft x 1ft",
      "de-DE": "- Jute\n- Vormontiert\n- 1 Fuß x 1 Fuß x 1 Fuß",
      "en-US": "- Jute\n- Preassembled\n- 1ft x 1ft x 1ft"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "A cube jute basket for the living room is a practical and stylish storage solution that adds warmth and texture to the space. The basket is made from natural jute fibers, which are tightly woven together to create a sturdy and durable structure.  The cube shape of the basket is perfect for storing a variety of items, such as blankets, magazines, remote controls, or even small plants. The open top of the basket allows for easy access to its contents, while the sides provide a secure barrier to keep everything neatly contained.  The neutral color of the jute fibers complements a variety of decor styles, from bohemian to coastal to rustic. The basket can be placed on the floor or on a shelf, and its compact size makes it easy to move around as needed.",
      "en-US": "A cube jute basket for the living room is a practical and stylish storage solution that adds warmth and texture to the space. The basket is made from natural jute fibers, which are tightly woven together to create a sturdy and durable structure.  The cube shape of the basket is perfect for storing a variety of items, such as blankets, magazines, remote controls, or even small plants. The open top of the basket allows for easy access to its contents, while the sides provide a secure barrier to keep everything neatly contained.  The neutral color of the jute fibers complements a variety of decor styles, from bohemian to coastal to rustic. The basket can be placed on the floor or on a shelf, and its compact size makes it easy to move around as needed.",
      "de-DE": "Ein Würfel-Jutekorb für das Wohnzimmer ist eine praktische und stilvolle Aufbewahrungslösung, die dem Raum Wärme und Struktur verleiht. Der Korb besteht aus natürlichen Jutefasern, die eng miteinander verwoben sind, um eine robuste und langlebige Struktur zu schaffen.  Die Würfelform des Korbs eignet sich perfekt zur Aufbewahrung einer Vielzahl von Gegenständen wie Decken, Zeitschriften, Fernbedienungen oder sogar kleinen Pflanzen. Die offene Oberseite des Korbs ermöglicht einen einfachen Zugriff auf den Inhalt, während die Seiten eine sichere Barriere bieten, um alles ordentlich zu verstauen.  Die neutrale Farbe der Jutefasern ergänzt eine Vielzahl von Einrichtungsstilen, von böhmisch über küstennah bis rustikal. Der Korb kann auf den Boden oder in ein Regal gestellt werden und lässt sich dank seiner kompakten Größe bei Bedarf leicht bewegen."
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
    "name": "color",
    "value": {
      "en-GB": "#EEB348",
      "de-DE": "#EEB348",
      "en-US": "#EEB348"
    }
  },
  {
    "name": "colorlabel",
    "value": {
      "en-GB": "Jute",
      "de-DE": "Jute",
      "en-US": "Jute"
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_355946576-nRxA5NAP.jpeg",
    "dimensions": {
      "w": 4684,
      "h": 3564
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
      "centAmount": 1299,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 1299,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 1299,
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
            "de-DE": "Würfelkorb aus Jute",
            "en-GB": "Cube Jute Basket",
            "en-US": "Cube Jute Basket"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "wrfel-jutekorb",
            "en-GB": "cube-jute-basket",
            "en-US": "cube-jute-basket"
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
