import type { TProductVariantDraft } from '../../../types';
import geometricPillowCase01 from './geometric-pillow-case-01';

describe(`with geometricPillowCase01 preset`, () => {
  it(`should return a geometricPillowCase01 preset`, () => {
    const geometricPillowCase01Preset =
      geometricPillowCase01().build<TProductVariantDraft>();
    expect(geometricPillowCase01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": {
              "de-DE": "silver",
              "en-GB": "silver",
              "en-US": "silver",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Silver",
              "en-GB": "Silver",
              "en-US": "Silver",
            },
          },
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Velvet fabric
      - Cotton lining
      - Pillow case comes with zip for easy removal
      - Pillow not included
      - Washable",
              "en-GB": "- Velvet fabric
      - Cotton lining
      - Pillow case comes with zip for easy removal
      - Pillow not included
      - Washable",
              "en-US": "- Velvet fabric
      - Cotton lining
      - Pillow case comes with zip for easy removal
      - Pillow not included
      - Washable
      ",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein geometrischer Kissenbezug für Zierkissen ist ein stilvolles und modernes Wohnaccessoire, das jedem Raum einen Hauch von visuellem Interesse verleihen kann. Der Kissenbezug besteht normalerweise aus einem weichen und strapazierfähigen Material wie Baumwolle, Leinen oder Polyester und weist ein kräftiges geometrisches Muster auf, das ein Gefühl von Tiefe und Dimension erzeugt.  Das geometrische Muster auf dem Kissenbezug wird normalerweise mit einer Vielzahl von Formen wie Dreiecken, Quadraten oder Sechsecken erstellt, die in einem sich wiederholenden Muster angeordnet sind. Der Kissenbezug verfügt über einen Reißverschluss, so dass er bei Bedarf einfach abgenommen und gewaschen werden kann.  Der geometrische Kissenbezug ist ein vielseitiges und stilvolles Accessoire, das verwendet werden kann, um eine Vielzahl von Einrichtungsstilen zu betonen, von modern und minimalistisch bis hin zu unkonventionell und vielseitig. Er ist perfekt, um andere gemusterte Dekorelemente in einem vielseitigen Raum zu ergänzen.  Insgesamt ist ein geometrischer Kissenbezug für Zierkissen ein stilvolles und vielseitiges Accessoire, das dazu beitragen kann, in jedem Raum ein zusammenhängendes und optisch interessantes Dekor zu schaffen. Das mutige und moderne Design, kombiniert mit weichen und langlebigen Materialien, machen ihn zu einem unverzichtbaren Accessoire für jedes Zuhause.",
              "en-GB": "A geometric pillowcase for throw pillows is a stylish and modern home decor accessory that can add a pop of visual interest to any room. The pillowcase is typically made from a soft and durable material, such as cotton, linen, or polyester, and features a bold geometric pattern that creates a sense of depth and dimension.  The geometric pattern on the pillowcase is typically created using a variety of shapes, such as triangles, squares, or hexagons, arranged in a repeating pattern. The pillowcase features a zipper closure, making it easy to remove and wash as needed.  The geometric pillowcase is a versatile and stylish accessory that can be used to accent a variety of decor styles, from modern and minimalist to bohemian and eclectic. It is perfect for complementing other patterned decor elements in a more eclectic space.  Overall, a geometric pillowcase for throw pillows is a stylish and versatile accessory that can help to create a cohesive and visually interesting decor scheme in any room. Its bold and modern design, combined with its soft and durable materials, make it a must-have accessory for any home.",
              "en-US": "A geometric pillowcase for throw pillows is a stylish and modern home decor accessory that can add a pop of visual interest to any room. The pillowcase is typically made from a soft and durable material, such as cotton, linen, or polyester, and features a bold geometric pattern that creates a sense of depth and dimension.  The geometric pattern on the pillowcase is typically created using a variety of shapes, such as triangles, squares, or hexagons, arranged in a repeating pattern. The pillowcase features a zipper closure, making it easy to remove and wash as needed.  The geometric pillowcase is a versatile and stylish accessory that can be used to accent a variety of decor styles, from modern and minimalist to bohemian and eclectic. It is perfect for complementing other patterned decor elements in a more eclectic space.  Overall, a geometric pillowcase for throw pillows is a stylish and versatile accessory that can help to create a cohesive and visually interesting decor scheme in any room. Its bold and modern design, combined with its soft and durable materials, make it a must-have accessory for any home.",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#C0C0C0",
              "label": {
                "de-DE": "Silber",
                "en-GB": "Silver",
                "en-US": "Silver",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5000,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_393014656-_k6QZQka.jpeg",
          },
          {
            "dimensions": {
              "h": 5000,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_428905072-yDh7ZXzp.jpeg",
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
              "centAmount": 1999,
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
              "centAmount": 1999,
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
              "centAmount": 1999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "GPC-01",
      }
    `);
  });

  it(`should return a geometricPillowCase01 preset when built for graphql`, () => {
    const geometricPillowCase01PresetGraphql =
      geometricPillowCase01().buildGraphql<TProductVariantDraft>();
    expect(geometricPillowCase01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": "{"en-US":"silver","en-GB":"silver","de-DE":"silver"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-US":"Silver","en-GB":"Silver","de-DE":"Silver"}",
          },
          {
            "name": "productspec",
            "value": "{"en-US":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable\\n","en-GB":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable","de-DE":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable"}",
          },
          {
            "name": "product-description",
            "value": "{"en-GB":"A geometric pillowcase for throw pillows is a stylish and modern home decor accessory that can add a pop of visual interest to any room. The pillowcase is typically made from a soft and durable material, such as cotton, linen, or polyester, and features a bold geometric pattern that creates a sense of depth and dimension.  The geometric pattern on the pillowcase is typically created using a variety of shapes, such as triangles, squares, or hexagons, arranged in a repeating pattern. The pillowcase features a zipper closure, making it easy to remove and wash as needed.  The geometric pillowcase is a versatile and stylish accessory that can be used to accent a variety of decor styles, from modern and minimalist to bohemian and eclectic. It is perfect for complementing other patterned decor elements in a more eclectic space.  Overall, a geometric pillowcase for throw pillows is a stylish and versatile accessory that can help to create a cohesive and visually interesting decor scheme in any room. Its bold and modern design, combined with its soft and durable materials, make it a must-have accessory for any home.","en-US":"A geometric pillowcase for throw pillows is a stylish and modern home decor accessory that can add a pop of visual interest to any room. The pillowcase is typically made from a soft and durable material, such as cotton, linen, or polyester, and features a bold geometric pattern that creates a sense of depth and dimension.  The geometric pattern on the pillowcase is typically created using a variety of shapes, such as triangles, squares, or hexagons, arranged in a repeating pattern. The pillowcase features a zipper closure, making it easy to remove and wash as needed.  The geometric pillowcase is a versatile and stylish accessory that can be used to accent a variety of decor styles, from modern and minimalist to bohemian and eclectic. It is perfect for complementing other patterned decor elements in a more eclectic space.  Overall, a geometric pillowcase for throw pillows is a stylish and versatile accessory that can help to create a cohesive and visually interesting decor scheme in any room. Its bold and modern design, combined with its soft and durable materials, make it a must-have accessory for any home.","de-DE":"Ein geometrischer Kissenbezug für Zierkissen ist ein stilvolles und modernes Wohnaccessoire, das jedem Raum einen Hauch von visuellem Interesse verleihen kann. Der Kissenbezug besteht normalerweise aus einem weichen und strapazierfähigen Material wie Baumwolle, Leinen oder Polyester und weist ein kräftiges geometrisches Muster auf, das ein Gefühl von Tiefe und Dimension erzeugt.  Das geometrische Muster auf dem Kissenbezug wird normalerweise mit einer Vielzahl von Formen wie Dreiecken, Quadraten oder Sechsecken erstellt, die in einem sich wiederholenden Muster angeordnet sind. Der Kissenbezug verfügt über einen Reißverschluss, so dass er bei Bedarf einfach abgenommen und gewaschen werden kann.  Der geometrische Kissenbezug ist ein vielseitiges und stilvolles Accessoire, das verwendet werden kann, um eine Vielzahl von Einrichtungsstilen zu betonen, von modern und minimalistisch bis hin zu unkonventionell und vielseitig. Er ist perfekt, um andere gemusterte Dekorelemente in einem vielseitigen Raum zu ergänzen.  Insgesamt ist ein geometrischer Kissenbezug für Zierkissen ein stilvolles und vielseitiges Accessoire, das dazu beitragen kann, in jedem Raum ein zusammenhängendes und optisch interessantes Dekor zu schaffen. Das mutige und moderne Design, kombiniert mit weichen und langlebigen Materialien, machen ihn zu einem unverzichtbaren Accessoire für jedes Zuhause."}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#C0C0C0","label":{"de-DE":"Silber","en-GB":"Silver","en-US":"Silver"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 5000,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_393014656-_k6QZQka.jpeg",
          },
          {
            "dimensions": {
              "height": 5000,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_428905072-yDh7ZXzp.jpeg",
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
              "centPrecision": {
                "centAmount": 1999,
                "currencyCode": "EUR",
              },
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
              "centPrecision": {
                "centAmount": 1999,
                "currencyCode": "GBP",
              },
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
              "centPrecision": {
                "centAmount": 1999,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "GPC-01",
      }
    `);
  });
});
