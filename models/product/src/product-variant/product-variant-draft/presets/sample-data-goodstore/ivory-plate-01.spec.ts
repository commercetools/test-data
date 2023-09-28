import type { TProductVariantDraft } from '../../../types';
import ivoryPlate01 from './ivory-plate-01';

describe(`with ivoryPlate01 preset`, () => {
  it(`should return a ivoryPlate01 preset`, () => {
    const ivoryPlate01Preset = ivoryPlate01().build<TProductVariantDraft>();
    expect(ivoryPlate01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Enthält 1 Teller",
              "en-GB": "- Includes 1 plate",
              "en-US": "- Includes 1 plate",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Dieser Elfenbeinteller ist ein High-End-Geschirr, das sowohl für funktionale als auch für ästhetische Zwecke entworfen wurde. Es besteht aus hochwertigem Porzellan und hat eine glatte Oberfläche, die sowohl elegant als auch langlebig ist.  Der Teller ist kreisförmig und hat eine flache Oberfläche mit einer leichten Rundung an den Rändern. Die Elfenbeinfarbe ist ein cremiger, cremefarbener Farbton, der warm und einladend ist und jedem Esszimmer einen Hauch von Raffinesse verleiht.  Das Design des Tellers zeichnet ihn aus, da er von einem erfahrenen Designer mit viel Liebe zum Detail gefertigt wurde.  Der Teller ist ein eigenständiges Stück, das für besondere Anlässe oder zur Präsentation bestimmt ist. Es ist ideal zum Servieren von Vorspeisen oder Desserts, und seine Größe und Form machen es einfach, es zu handhaben und auf dem Tisch herumzureichen.  Insgesamt ist ein runder Designerteller aus Elfenbein eine luxuriöse und stilvolle Wahl für gehobene Speisen oder besondere Anlässe. Sein einzigartiges Design und seine hochwertige Konstruktion machen es zu einem Statement-Stück, das Gäste beeindrucken und jedes kulinarische Erlebnis aufwerten wird.",
              "en-GB": "This ivory plate is a high-end dish designed for both functional and aesthetic purposes. It is made of high-quality porcelain and has a smooth surface that is both elegant and durable.  The plate is circular in shape and has a flat surface with a slight curve at the edges. The ivory color is a creamy, off-white shade that is warm and inviting, adding a touch of sophistication to any dining setting.  The design of the plate is what sets it apart, as it has been crafted by a skilled designer with an eye for detail.   The plate is a standalone piece intended for special occasions or display. It is ideal for serving appetizers or desserts, and its size and shape make it easy to handle and pass around the table.  Overall, a round designer plate made of ivory is a luxurious and stylish choice for fine dining or special occasions. Its unique design and high-quality construction make it a statement piece that is sure to impress guests and elevate any dining experience.",
              "en-US": "This ivory plate is a high-end dish designed for both functional and aesthetic purposes. It is made of high-quality porcelain and has a smooth surface that is both elegant and durable.  The plate is circular in shape and has a flat surface with a slight curve at the edges. The ivory color is a creamy, off-white shade that is warm and inviting, adding a touch of sophistication to any dining setting.  The design of the plate is what sets it apart, as it has been crafted by a skilled designer with an eye for detail.   The plate is a standalone piece intended for special occasions or display. It is ideal for serving appetizers or desserts, and its size and shape make it easy to handle and pass around the table.  Overall, a round designer plate made of ivory is a luxurious and stylish choice for fine dining or special occasions. Its unique design and high-quality construction make it a statement piece that is sure to impress guests and elevate any dining experience.",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#FFFFF0",
              "label": {
                "de-DE": "Elfenbein",
                "en-GB": "Ivory",
                "en-US": "Ivory",
              },
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#F4F3F0",
              "en-GB": "#F4F3F0",
              "en-US": "#F4F3F0",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Elfenbein",
              "en-GB": "Ivory",
              "en-US": "Ivory",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4576,
              "w": 5088,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Ivory%20Plate-_7Y9OpD5.jpeg",
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
              "centAmount": 1699,
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
              "centAmount": 1699,
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
              "centAmount": 1699,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "ISP-01",
      }
    `);
  });

  it(`should return a ivoryPlate01 preset when built for graphql`, () => {
    const ivoryPlate01PresetGraphql =
      ivoryPlate01().buildGraphql<TProductVariantDraft>();
    expect(ivoryPlate01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes 1 plate","de-DE":"- Enthält 1 Teller","en-US":"- Includes 1 plate"}",
          },
          {
            "name": "product-description",
            "value": "{"en-GB":"This ivory plate is a high-end dish designed for both functional and aesthetic purposes. It is made of high-quality porcelain and has a smooth surface that is both elegant and durable.  The plate is circular in shape and has a flat surface with a slight curve at the edges. The ivory color is a creamy, off-white shade that is warm and inviting, adding a touch of sophistication to any dining setting.  The design of the plate is what sets it apart, as it has been crafted by a skilled designer with an eye for detail.   The plate is a standalone piece intended for special occasions or display. It is ideal for serving appetizers or desserts, and its size and shape make it easy to handle and pass around the table.  Overall, a round designer plate made of ivory is a luxurious and stylish choice for fine dining or special occasions. Its unique design and high-quality construction make it a statement piece that is sure to impress guests and elevate any dining experience.","en-US":"This ivory plate is a high-end dish designed for both functional and aesthetic purposes. It is made of high-quality porcelain and has a smooth surface that is both elegant and durable.  The plate is circular in shape and has a flat surface with a slight curve at the edges. The ivory color is a creamy, off-white shade that is warm and inviting, adding a touch of sophistication to any dining setting.  The design of the plate is what sets it apart, as it has been crafted by a skilled designer with an eye for detail.   The plate is a standalone piece intended for special occasions or display. It is ideal for serving appetizers or desserts, and its size and shape make it easy to handle and pass around the table.  Overall, a round designer plate made of ivory is a luxurious and stylish choice for fine dining or special occasions. Its unique design and high-quality construction make it a statement piece that is sure to impress guests and elevate any dining experience.","de-DE":"Dieser Elfenbeinteller ist ein High-End-Geschirr, das sowohl für funktionale als auch für ästhetische Zwecke entworfen wurde. Es besteht aus hochwertigem Porzellan und hat eine glatte Oberfläche, die sowohl elegant als auch langlebig ist.  Der Teller ist kreisförmig und hat eine flache Oberfläche mit einer leichten Rundung an den Rändern. Die Elfenbeinfarbe ist ein cremiger, cremefarbener Farbton, der warm und einladend ist und jedem Esszimmer einen Hauch von Raffinesse verleiht.  Das Design des Tellers zeichnet ihn aus, da er von einem erfahrenen Designer mit viel Liebe zum Detail gefertigt wurde.  Der Teller ist ein eigenständiges Stück, das für besondere Anlässe oder zur Präsentation bestimmt ist. Es ist ideal zum Servieren von Vorspeisen oder Desserts, und seine Größe und Form machen es einfach, es zu handhaben und auf dem Tisch herumzureichen.  Insgesamt ist ein runder Designerteller aus Elfenbein eine luxuriöse und stilvolle Wahl für gehobene Speisen oder besondere Anlässe. Sein einzigartiges Design und seine hochwertige Konstruktion machen es zu einem Statement-Stück, das Gäste beeindrucken und jedes kulinarische Erlebnis aufwerten wird."}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#FFFFF0","label":{"de-DE":"Elfenbein","en-GB":"Ivory","en-US":"Ivory"}}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#F4F3F0","de-DE":"#F4F3F0","en-US":"#F4F3F0"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Ivory","de-DE":"Elfenbein","en-US":"Ivory"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4576,
              "width": 5088,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Ivory%20Plate-_7Y9OpD5.jpeg",
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
                "centAmount": 1699,
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
                "centAmount": 1699,
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
                "centAmount": 1699,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "ISP-01",
      }
    `);
  });
});
