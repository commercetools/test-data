import type { TProductDraft } from '../../../types';
import ivoryPlate from './ivory-plate';

describe(`with ivoryPlate preset`, () => {
  it(`should return a ivoryPlate preset`, () => {
    const ivoryPlatePreset = ivoryPlate().build<TProductDraft>();
    expect(ivoryPlatePreset).toMatchInlineSnapshot(`
{
  "categories": [
    {
      "key": "plates",
      "typeId": "category",
    },
    {
      "key": "kitchen",
      "typeId": "category",
    },
    {
      "key": "serving-platters",
      "typeId": "category",
    },
    {
      "key": "new-arrivals",
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
  ],
  "categoryOrderHints": undefined,
  "description": {
    "de": undefined,
    "de-DE": "Dieser Elfenbeinteller ist ein High-End-Geschirr, das sowohl für funktionale als auch für ästhetische Zwecke entworfen wurde. Es besteht aus hochwertigem Porzellan und hat eine glatte Oberfläche, die sowohl elegant als auch langlebig ist.  Der Teller ist kreisförmig und hat eine flache Oberfläche mit einer leichten Rundung an den Rändern. Die Elfenbeinfarbe ist ein cremiger, cremefarbener Farbton, der warm und einladend ist und jedem Esszimmer einen Hauch von Raffinesse verleiht.  Das Design des Tellers zeichnet ihn aus, da er von einem erfahrenen Designer mit viel Liebe zum Detail gefertigt wurde.  Der Teller ist ein eigenständiges Stück, das für besondere Anlässe oder zur Präsentation bestimmt ist. Es ist ideal zum Servieren von Vorspeisen oder Desserts, und seine Größe und Form machen es einfach, es zu handhaben und auf dem Tisch herumzureichen.  Insgesamt ist ein runder Designerteller aus Elfenbein eine luxuriöse und stilvolle Wahl für gehobene Speisen oder besondere Anlässe. Sein einzigartiges Design und seine hochwertige Konstruktion machen es zu einem Statement-Stück, das Gäste beeindrucken und jedes kulinarische Erlebnis aufwerten wird.",
    "en": undefined,
    "en-GB": "This ivory plate is a high-end dish designed for both functional and aesthetic purposes. It is made of high-quality porcelain and has a smooth surface that is both elegant and durable.  The plate is circular in shape and has a flat surface with a slight curve at the edges. The ivory color is a creamy, off-white shade that is warm and inviting, adding a touch of sophistication to any dining setting.  The design of the plate is what sets it apart, as it has been crafted by a skilled designer with an eye for detail.   The plate is a standalone piece intended for special occasions or display. It is ideal for serving appetizers or desserts, and its size and shape make it easy to handle and pass around the table.  Overall, a round designer plate made of ivory is a luxurious and stylish choice for fine dining or special occasions. Its unique design and high-quality construction make it a statement piece that is sure to impress guests and elevate any dining experience.",
    "en-US": "This ivory plate is a high-end dish designed for both functional and aesthetic purposes. It is made of high-quality porcelain and has a smooth surface that is both elegant and durable.  The plate is circular in shape and has a flat surface with a slight curve at the edges. The ivory color is a creamy, off-white shade that is warm and inviting, adding a touch of sophistication to any dining setting.  The design of the plate is what sets it apart, as it has been crafted by a skilled designer with an eye for detail.   The plate is a standalone piece intended for special occasions or display. It is ideal for serving appetizers or desserts, and its size and shape make it easy to handle and pass around the table.  Overall, a round designer plate made of ivory is a luxurious and stylish choice for fine dining or special occasions. Its unique design and high-quality construction make it a statement piece that is sure to impress guests and elevate any dining experience.",
    "fr": undefined,
  },
  "key": "ivory-plate",
  "masterVariant": {
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
        "name": "color",
        "value": {
          "de-DE": "Elfenbein:#FFFFF0",
          "en-GB": "Ivory:#FFFFF0",
          "en-US": "Ivory:#FFFFF0",
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
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ivory_Plate-1.1.jpeg",
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
  },
  "metaDescription": undefined,
  "metaKeywords": undefined,
  "metaTitle": undefined,
  "name": {
    "de": undefined,
    "de-DE": "Elfenbeinteller",
    "en": undefined,
    "en-GB": "Ivory Plate",
    "en-US": "Ivory Plate",
    "fr": undefined,
  },
  "priceMode": undefined,
  "productType": {
    "key": "furniture-and-decor",
    "typeId": "product-type",
  },
  "publish": true,
  "searchKeywords": undefined,
  "slug": {
    "de": undefined,
    "de-DE": "elfenbeinteller",
    "en": undefined,
    "en-GB": "ivory-plate",
    "en-US": "ivory-plate",
    "fr": undefined,
  },
  "state": undefined,
  "taxCategory": {
    "key": "standard-tax",
    "typeId": "tax-category",
  },
  "variants": undefined,
}
`);
  });

  it(`should return a ivoryPlate preset when built for graphql`, () => {
    const ivoryPlatePresetGraphql = ivoryPlate().buildGraphql<TProductDraft>();
    expect(ivoryPlatePresetGraphql).toMatchInlineSnapshot(`
{
  "categories": [
    {
      "key": "plates",
      "typeId": "category",
    },
    {
      "key": "kitchen",
      "typeId": "category",
    },
    {
      "key": "serving-platters",
      "typeId": "category",
    },
    {
      "key": "new-arrivals",
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
  ],
  "categoryOrderHints": undefined,
  "description": [
    {
      "locale": "en-GB",
      "value": "This ivory plate is a high-end dish designed for both functional and aesthetic purposes. It is made of high-quality porcelain and has a smooth surface that is both elegant and durable.  The plate is circular in shape and has a flat surface with a slight curve at the edges. The ivory color is a creamy, off-white shade that is warm and inviting, adding a touch of sophistication to any dining setting.  The design of the plate is what sets it apart, as it has been crafted by a skilled designer with an eye for detail.   The plate is a standalone piece intended for special occasions or display. It is ideal for serving appetizers or desserts, and its size and shape make it easy to handle and pass around the table.  Overall, a round designer plate made of ivory is a luxurious and stylish choice for fine dining or special occasions. Its unique design and high-quality construction make it a statement piece that is sure to impress guests and elevate any dining experience.",
    },
    {
      "locale": "en-US",
      "value": "This ivory plate is a high-end dish designed for both functional and aesthetic purposes. It is made of high-quality porcelain and has a smooth surface that is both elegant and durable.  The plate is circular in shape and has a flat surface with a slight curve at the edges. The ivory color is a creamy, off-white shade that is warm and inviting, adding a touch of sophistication to any dining setting.  The design of the plate is what sets it apart, as it has been crafted by a skilled designer with an eye for detail.   The plate is a standalone piece intended for special occasions or display. It is ideal for serving appetizers or desserts, and its size and shape make it easy to handle and pass around the table.  Overall, a round designer plate made of ivory is a luxurious and stylish choice for fine dining or special occasions. Its unique design and high-quality construction make it a statement piece that is sure to impress guests and elevate any dining experience.",
    },
    {
      "locale": "de-DE",
      "value": "Dieser Elfenbeinteller ist ein High-End-Geschirr, das sowohl für funktionale als auch für ästhetische Zwecke entworfen wurde. Es besteht aus hochwertigem Porzellan und hat eine glatte Oberfläche, die sowohl elegant als auch langlebig ist.  Der Teller ist kreisförmig und hat eine flache Oberfläche mit einer leichten Rundung an den Rändern. Die Elfenbeinfarbe ist ein cremiger, cremefarbener Farbton, der warm und einladend ist und jedem Esszimmer einen Hauch von Raffinesse verleiht.  Das Design des Tellers zeichnet ihn aus, da er von einem erfahrenen Designer mit viel Liebe zum Detail gefertigt wurde.  Der Teller ist ein eigenständiges Stück, das für besondere Anlässe oder zur Präsentation bestimmt ist. Es ist ideal zum Servieren von Vorspeisen oder Desserts, und seine Größe und Form machen es einfach, es zu handhaben und auf dem Tisch herumzureichen.  Insgesamt ist ein runder Designerteller aus Elfenbein eine luxuriöse und stilvolle Wahl für gehobene Speisen oder besondere Anlässe. Sein einzigartiges Design und seine hochwertige Konstruktion machen es zu einem Statement-Stück, das Gäste beeindrucken und jedes kulinarische Erlebnis aufwerten wird.",
    },
  ],
  "key": "ivory-plate",
  "masterVariant": {
    "assets": undefined,
    "attributes": [
      {
        "name": "productspec",
        "value": "{"en-GB":"- Includes 1 plate","de-DE":"- Enthält 1 Teller","en-US":"- Includes 1 plate"}",
      },
      {
        "name": "color",
        "value": "{"en-GB":"Ivory:#FFFFF0","de-DE":"Elfenbein:#FFFFF0","en-US":"Ivory:#FFFFF0"}",
      },
    ],
    "images": [
      {
        "dimensions": {
          "height": 4576,
          "width": 5088,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ivory_Plate-1.1.jpeg",
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
  },
  "metaDescription": undefined,
  "metaKeywords": undefined,
  "metaTitle": undefined,
  "name": [
    {
      "locale": "en-US",
      "value": "Ivory Plate",
    },
    {
      "locale": "en-GB",
      "value": "Ivory Plate",
    },
    {
      "locale": "de-DE",
      "value": "Elfenbeinteller",
    },
  ],
  "priceMode": undefined,
  "productType": {
    "key": "furniture-and-decor",
    "typeId": "product-type",
  },
  "publish": true,
  "searchKeywords": undefined,
  "slug": [
    {
      "locale": "en-US",
      "value": "ivory-plate",
    },
    {
      "locale": "en-GB",
      "value": "ivory-plate",
    },
    {
      "locale": "de-DE",
      "value": "elfenbeinteller",
    },
  ],
  "state": undefined,
  "taxCategory": {
    "key": "standard-tax",
    "typeId": "tax-category",
  },
  "variants": undefined,
}
`);
  });
});
