import type { TProductDraft } from '../../../types';
import classicServingTray from './classic-serving-tray';

describe(`with classicServingTray preset`, () => {
  it(`should return a classicServingTray preset`, () => {
    const classicServingTrayPreset =
      classicServingTray().build<TProductDraft>();
    expect(classicServingTrayPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "serving-platters",
            "typeId": "category",
          },
          {
            "key": "serveware",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "key": "classic-serving-tray",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Made of food-grade plastic",
      "de-DE": "- Material: lebensmittelechter Kunststoff",
      "en-US": "- Made of food-grade plastic"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "This Classic Serving Tray is a versatile and functional item that can be used in a variety of settings. The tray is rectangular, with raised edges and handles on either side, making it easy to carry and transport.  This Classic Serving Tray features a simple and timeless design, with clean lines and a minimalist aesthetic. It can be used for a variety of purposes, such as carrying drinks and appetizers, serving breakfast in bed, or displaying decorative items.  To clean, it is recommended to wash it by hand with a mild detergent, using a soft cloth or sponge. Harsh cleaning agents or abrasives should be avoided, as they can damage the surface of the tray.  Overall, a classic serving tray is a practical and stylish item that adds a touch of sophistication to any setting. Its timeless design and versatility make it a popular choice for serving and displaying food, drinks, and other items.",
      "en-US": "This Classic Serving Tray is a versatile and functional item that can be used in a variety of settings. The tray is rectangular, with raised edges and handles on either side, making it easy to carry and transport.  This Classic Serving Tray features a simple and timeless design, with clean lines and a minimalist aesthetic. It can be used for a variety of purposes, such as carrying drinks and appetizers, serving breakfast in bed, or displaying decorative items.  To clean, it is recommended to wash it by hand with a mild detergent, using a soft cloth or sponge. Harsh cleaning agents or abrasives should be avoided, as they can damage the surface of the tray.  Overall, a classic serving tray is a practical and stylish item that adds a touch of sophistication to any setting. Its timeless design and versatility make it a popular choice for serving and displaying food, drinks, and other items.",
      "de-DE": "Dieses klassische Serviertablett ist ein vielseitiger und funktionaler Artikel, der in einer Vielzahl von Umgebungen verwendet werden kann. Das Tablett ist rechteckig, mit erhöhten Kanten und Griffen auf beiden Seiten, wodurch es leicht zu tragen und zu transportieren ist.  Dieses klassische Serviertablett zeichnet sich durch ein einfaches und zeitloses Design mit klaren Linien und einer minimalistischen Ästhetik aus. Es kann für eine Vielzahl von Zwecken verwendet werden, z. B. zum Transport von Getränken und Häppchen, zum Servieren des Frühstücks im Bett oder zum Präsentieren von Dekorationsgegenständen.  Zur Reinigung wird empfohlen, es mit einem milden Reinigungsmittel und einem weichen Tuch oder Schwamm von Hand zu waschen. Scharfe Reinigungsmittel oder Scheuermittel sollten vermieden werden, da sie die Oberfläche des Tabletts beschädigen können.  Insgesamt ist ein klassisches Serviertablett ein praktisches und stilvolles Element, das jeder Umgebung einen Hauch von Raffinesse verleiht. Sein zeitloses Design und seine Vielseitigkeit machen ihn zu einer beliebten Wahl zum Servieren und Präsentieren von Speisen, Getränken und anderen Gegenständen."
    }
  },
  {
    "name": "color",
    "value": {
      "en-GB": "#FFF",
      "de-DE": "#FFF",
      "en-US": "#FFF"
    }
  },
  {
    "name": "colorlabel",
    "value": {
      "en-GB": "White",
      "de-DE": "Weiß",
      "en-US": "White"
    }
  },
  {
    "name": "color-filter",
    "value": {
      "key": "#FFF",
      "label": {
        "de-DE": "Weiss",
        "en-GB": "White",
        "en-US": "White"
      }
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_576051573-RimbK5GO.jpeg",
    "dimensions": {
      "w": 4000,
      "h": 3000
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_569763663-QLatH53Y.jpeg",
    "dimensions": {
      "w": 6240,
      "h": 4160
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
      "centAmount": 299,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 299,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 299,
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
            "de-DE": "Klassisches Serviertablett",
            "en-GB": "Classic Serving Tray",
            "en-US": "Classic Serving Tray"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "klassisches-serviertablett",
            "en-GB": "classic-serving-tray",
            "en-US": "classic-serving-tray"
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
