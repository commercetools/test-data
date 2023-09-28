import type { TProductDraft } from '../../../types';
import mayaPillowCover from './maya-pillow-cover';

describe(`with mayaPillowCover preset`, () => {
  it(`should return a mayaPillowCover preset`, () => {
    const mayaPillowCoverPreset = mayaPillowCover().build<TProductDraft>();
    expect(mayaPillowCoverPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bedding",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "key": "maya-pillow-cover",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Machine washable\n- Does not include pillow",
      "de-DE": "- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten",
      "en-US": "- Machine washable\n- Does not include pillow"
    }
  },
  {
    "name": "color",
    "value": {
      "en-GB": "#756960",
      "de-DE": "#756960",
      "en-US": "#756960"
    }
  },
  {
    "name": "colorlabel",
    "value": {
      "en-GB": "Mauve",
      "de-DE": "Mauve",
      "en-US": "Mauve"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "A microfiber brown pillowcase is a soft and comfortable pillow cover made from synthetic fibers. The microfiber material is designed to be soft and silky to the touch, providing a comfortable and cozy sleeping experience.  The brown color of the pillowcase is typically warm and inviting, creating a cozy and relaxing atmosphere in a bedroom. It can also be a versatile color that matches well with a variety of other colors and decor styles.  Microfiber pillowcases are known for their durability and easy care. They are typically resistant to wrinkles and shrinkage, making them ideal for busy households. They are also hypoallergenic, making them a great option for people with allergies or sensitivities.  Overall, a microfiber brown pillowcase is a practical and comfortable choice for any bedroom. It is soft, durable, and easy to care for, providing a cozy and inviting sleeping environment for a restful night's sleep.",
      "en-US": "A microfiber brown pillowcase is a soft and comfortable pillow cover made from synthetic fibers. The microfiber material is designed to be soft and silky to the touch, providing a comfortable and cozy sleeping experience.  The brown color of the pillowcase is typically warm and inviting, creating a cozy and relaxing atmosphere in a bedroom. It can also be a versatile color that matches well with a variety of other colors and decor styles.  Microfiber pillowcases are known for their durability and easy care. They are typically resistant to wrinkles and shrinkage, making them ideal for busy households. They are also hypoallergenic, making them a great option for people with allergies or sensitivities.  Overall, a microfiber brown pillowcase is a practical and comfortable choice for any bedroom. It is soft, durable, and easy to care for, providing a cozy and inviting sleeping environment for a restful night's sleep.",
      "de-DE": "Ein brauner Mikrofaser-Kissenbezug ist ein weicher und bequemer Kissenbezug aus synthetischen Fasern. Das Mikrofasermaterial fühlt sich weich und seidig an und bietet ein komfortables und gemütliches Schlaferlebnis.  Die braune Farbe des Kissenbezugs ist typisch warm und einladend und schafft eine gemütliche und entspannende Atmosphäre in einem Schlafzimmer. Es kann auch eine vielseitige Farbe sein, die gut zu einer Vielzahl anderer Farben und Dekorstile passt.  Kissenbezüge aus Mikrofaser sind bekannt für ihre Strapazierfähigkeit und Pflegeleichtigkeit. Sie sind in der Regel knitter- und schrumpffrei und somit ideal für vielbeschäftigte Haushalte. Sie sind auch hypoallergen, was sie zu einer großartigen Option für Menschen mit Allergien oder Empfindlichkeiten macht.  Insgesamt ist ein brauner Kissenbezug aus Mikrofaser eine praktische und bequeme Wahl für jedes Schlafzimmer. Es ist weich, strapazierfähig und pflegeleicht und bietet eine gemütliche und einladende Schlafumgebung für einen erholsamen Schlaf."
    }
  },
  {
    "name": "color-filter",
    "value": {
      "key": "#A020F0",
      "label": {
        "de-DE": "Lila",
        "en-GB": "Purple",
        "en-US": "Purple"
      }
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Maya%20Pillow%20Cover-0UMJUfZy.jpeg",
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
      "centAmount": 899,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 899,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 899,
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
            "de-DE": "Maya-Kissenbezug",
            "en-GB": "Maya Pillow Cover",
            "en-US": "Maya Pillow Cover"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "maya-kissenbezug",
            "en-GB": "maya-pillow-cover",
            "en-US": "maya-pillow-cover"
          },
        "taxCategory": {
          "key": "standard-tax-category",
          "typeId": "tax-category",
        },
        "variants": [
[object Promise]
       ]
      }
    `);
  });
});
