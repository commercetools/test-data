import type { TProductDraft } from '../../../types';
import fawnArmchair from './fawn-armchair';
describe(`with fawnArmchair preset`, () => {
  it('should return a sample fawnArmchair product preset', () => {
    const fawnArmchairPreset = fawnArmchair().build<TProductDraft>();
    expect(fawnArmchairPreset).toMatchInlineSnapshot(`
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
        "description": {
          "de": undefined,
          "de-DE": "Dieser Lederstuhl mit Ebenholzbeinen im Art-Deco-Stil hat ein schlankes, stromlinienförmiges Design, das Raffinesse und Eleganz ausstrahlt. Der Stuhl hat einen bequem gepolsterten Sitz und eine Rückenlehne. Die Lederpolsterung vermittelt ein weiches und luxuriöses Gefühl. Die Beine aus Ebenholz sind lang und konisch zulaufend, mit einer glatten Oberfläche, die den modernen Stil des Stuhls betont. Der Stuhl weist auch markante Art-Deco-Elemente wie eckige Formen, kräftige Linien und geometrische Muster auf. Dieser Stuhl ist ein markantes Möbelstück, das jedem Raum sowohl Stil als auch Komfort verleiht.",
          "en": undefined,
          "en-GB": "An art deco leather chair with ebony legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with the leather upholstery providing a soft and luxurious feel. The ebony legs are long and tapered, with a smooth finish that accentuates the chair's modern style. The chair also features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair would be a striking piece of furniture that adds both style and comfort to any room.",
          "en-US": "An art deco leather chair with ebony legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with the leather upholstery providing a soft and luxurious feel. The ebony legs are long and tapered, with a smooth finish that accentuates the chair's modern style. The chair also features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair would be a striking piece of furniture that adds both style and comfort to any room.",
          "fr": undefined,
        },
        "key": "fawn-armchair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Leder erfordert besondere Pflege",
                "en-GB": "- Leather requires special care",
                "en-US": "- Leather requires special care",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Bräunen:#D2B48C",
                "en-GB": "Tan:#D2B48C",
                "en-US": "Tan:#D2B48C",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "Schwarz:#000000",
                "en-GB": "Black:#000000",
                "en-US": "Black:#000000",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3200,
                "w": 2400,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Fawn_Armchair-1.1.jpeg",
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
              "key": "59900EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 59900,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "59900GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 59900,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "59900USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 59900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "FARM-05",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Sessel "Fawn"",
          "en": undefined,
          "en-GB": "Fawn Armchair",
          "en-US": "Fawn Armchair",
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
          "de-DE": "fawn-sessel",
          "en": undefined,
          "en-GB": "fawn-armchair",
          "en-US": "fawn-armchair",
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
});
