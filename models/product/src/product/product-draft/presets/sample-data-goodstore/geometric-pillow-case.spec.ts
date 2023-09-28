import type { TProductDraft } from '../../../types';
import geometricPillowCase from './geometric-pillow-case';

describe(`with geometricPillowCase preset`, () => {
  it(`should return a geometricPillowCase preset`, () => {
    const geometricPillowCasePreset =
      geometricPillowCase().build<TProductDraft>();
    expect(geometricPillowCasePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "home-decor",
            "typeId": "category",
          },
          {
            "key": "new-arrivals",
            "typeId": "category",
          },
          {
            "key": "bedding",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "key": "geometric-pillow-case",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "color",
    "value": {
      "en-US": "silver",
      "en-GB": "silver",
      "de-DE": "silver"
    }
  },
  {
    "name": "colorlabel",
    "value": {
      "en-US": "Silver",
      "en-GB": "Silver",
      "de-DE": "Silver"
    }
  },
  {
    "name": "productspec",
    "value": {
      "en-US": "- Velvet fabric\n- Cotton lining\n- Pillow case comes with zip for easy removal\n- Pillow not included\n- Washable\n",
      "en-GB": "- Velvet fabric\n- Cotton lining\n- Pillow case comes with zip for easy removal\n- Pillow not included\n- Washable",
      "de-DE": "- Velvet fabric\n- Cotton lining\n- Pillow case comes with zip for easy removal\n- Pillow not included\n- Washable"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "A geometric pillowcase for throw pillows is a stylish and modern home decor accessory that can add a pop of visual interest to any room. The pillowcase is typically made from a soft and durable material, such as cotton, linen, or polyester, and features a bold geometric pattern that creates a sense of depth and dimension.  The geometric pattern on the pillowcase is typically created using a variety of shapes, such as triangles, squares, or hexagons, arranged in a repeating pattern. The pillowcase features a zipper closure, making it easy to remove and wash as needed.  The geometric pillowcase is a versatile and stylish accessory that can be used to accent a variety of decor styles, from modern and minimalist to bohemian and eclectic. It is perfect for complementing other patterned decor elements in a more eclectic space.  Overall, a geometric pillowcase for throw pillows is a stylish and versatile accessory that can help to create a cohesive and visually interesting decor scheme in any room. Its bold and modern design, combined with its soft and durable materials, make it a must-have accessory for any home.",
      "en-US": "A geometric pillowcase for throw pillows is a stylish and modern home decor accessory that can add a pop of visual interest to any room. The pillowcase is typically made from a soft and durable material, such as cotton, linen, or polyester, and features a bold geometric pattern that creates a sense of depth and dimension.  The geometric pattern on the pillowcase is typically created using a variety of shapes, such as triangles, squares, or hexagons, arranged in a repeating pattern. The pillowcase features a zipper closure, making it easy to remove and wash as needed.  The geometric pillowcase is a versatile and stylish accessory that can be used to accent a variety of decor styles, from modern and minimalist to bohemian and eclectic. It is perfect for complementing other patterned decor elements in a more eclectic space.  Overall, a geometric pillowcase for throw pillows is a stylish and versatile accessory that can help to create a cohesive and visually interesting decor scheme in any room. Its bold and modern design, combined with its soft and durable materials, make it a must-have accessory for any home.",
      "de-DE": "Ein geometrischer Kissenbezug für Wurfkissen ist ein stilvolles und modernes Wohnaccessoire, das jedem Raum einen Hauch von visuellem Interesse verleihen kann. Der Kissenbezug besteht normalerweise aus einem weichen und strapazierfähigen Material wie Baumwolle, Leinen oder Polyester und weist ein kräftiges geometrisches Muster auf, das ein Gefühl von Tiefe und Dimension erzeugt.  Das geometrische Muster auf dem Kissenbezug wird normalerweise mit einer Vielzahl von Formen wie Dreiecken, Quadraten oder Sechsecken erstellt, die in einem sich wiederholenden Muster angeordnet sind. Der Kissenbezug verfügt über einen Reißverschluss, sodass er bei Bedarf einfach abgenommen und gewaschen werden kann.  Der geometrische Kissenbezug ist ein vielseitiges und stilvolles Accessoire, das verwendet werden kann, um eine Vielzahl von Einrichtungsstilen zu betonen, von modern und minimalistisch bis hin zu unkonventionell und vielseitig. Es ist perfekt, um andere gemusterte Dekorelemente in einem vielseitigeren Raum zu ergänzen.  Insgesamt ist ein geometrischer Kissenbezug für Wurfkissen ein stilvolles und vielseitiges Accessoire, das dazu beitragen kann, in jedem Raum ein zusammenhängendes und optisch interessantes Dekor zu schaffen. Sein mutiges und modernes Design, kombiniert mit seinen weichen und langlebigen Materialien, machen es zu einem unverzichtbaren Accessoire für jedes Zuhause."
    }
  },
  {
    "name": "color-filter",
    "value": {
      "key": "#C0C0C0",
      "label": {
        "de-DE": "Silber",
        "en-GB": "Silver",
        "en-US": "Silver"
      }
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_393014656-_k6QZQka.jpeg",
    "dimensions": {
      "w": 5000,
      "h": 5000
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_428905072-yDh7ZXzp.jpeg",
    "dimensions": {
      "w": 5000,
      "h": 5000
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
      "centAmount": 1999,
      "fractionDigits": 2
    },
    "country": "DE",
    "discounted": {
      "value": {
        "type": "centPrecision",
        "currencyCode": "EUR",
        "centAmount": 1799,
        "fractionDigits": 2
      },
      "discount": {
        "typeId": "product-discount",
        "id": "5ac6c45a-1887-440d-ae96-83a0648d5174"
      }
    }
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 1999,
      "fractionDigits": 2
    },
    "country": "GB",
    "discounted": {
      "value": {
        "type": "centPrecision",
        "currencyCode": "GBP",
        "centAmount": 1799,
        "fractionDigits": 2
      },
      "discount": {
        "typeId": "product-discount",
        "id": "5ac6c45a-1887-440d-ae96-83a0648d5174"
      }
    }
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 1999,
      "fractionDigits": 2
    },
    "country": "US",
    "discounted": {
      "value": {
        "type": "centPrecision",
        "currencyCode": "USD",
        "centAmount": 1799,
        "fractionDigits": 2
      },
      "discount": {
        "typeId": "product-discount",
        "id": "5ac6c45a-1887-440d-ae96-83a0648d5174"
      }
    }
  }
]
,
        },
      "metaTitle": {
            "en-US": "",
            "de-DE": ""
          },
      "name": {
            "en-US": "Geometric Pillow Case",
            "en-GB": "Geometric Pillow Case",
            "de-DE": "Geometrischer Kissenbezug"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "en-US": "geometric-pillow-case",
            "de-DE": "geometrischer-kissenbezug",
            "en-GB": "geometric-pillow-case"
          },
        "taxCategory": {
          "key": "standard-tax-category",
          "typeId": "tax-category",
        },
        "variants": [
[object Promise],
[object Promise]
       ]
      }
    `);
  });
});
