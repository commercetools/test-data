import type { TProductDraft } from '../../../types';
import ashenRug from './ashen-rug';

describe(`with ashenRug preset`, () => {
  it(`should return a ashenRug preset`, () => {
    const ashenRugPreset = ashenRug().build<TProductDraft>();
    expect(ashenRugPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "rugs",
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
        "description": {
          "de": undefined,
          "de-DE": "Ein moderner Shag-Teppich ist eine Art Vorleger oder Teppich mit langem Plüschflor, der für seine Weichheit und seinen Komfort bekannt ist. Im Gegensatz zu traditionellen Shag-Teppichen, die in den 1970er Jahren beliebt waren und ein etwas zotteliges und ungepflegtes Aussehen hatten, sind moderne Shag-Teppiche raffinierter und haben ein elegantes, zeitgemäßes Aussehen.  Neben ihrer Weichheit und ihrem Komfort sind moderne Hochflorteppiche auch für ihre Fähigkeit bekannt, Schall zu absorbieren und eine gemütliche, einladende Atmosphäre zu schaffen. Sie werden oft in Wohnzimmern, Schlafzimmern und anderen Räumen verwendet, in denen Komfort und Stil wichtig sind.  Ein moderner Hochflorteppich ist eine luxuriöse und stilvolle Ergänzung für jedes Zuhause. Seine weiche, plüschige Textur und sein schlankes, modernes Aussehen machen ihn zu einer beliebten Wahl für diejenigen, die ihrem Wohnraum Komfort und Stil verleihen möchten.",
          "en": undefined,
          "en-GB": "A modern shag carpet is a type of rug or carpet with a long, plush pile that is known for its softness and comfort. Unlike traditional shag carpets, which were popular in the 1970s and had a somewhat shaggy and unkempt appearance, modern shag carpets are more refined and have a sleek, contemporary look.  In addition to their softness and comfort, modern shag carpets are also known for their ability to absorb sound and create a cozy, inviting atmosphere. They are often used in living rooms, bedrooms, and other spaces where comfort and style are important.  Overall, a modern shag carpet is a luxurious and stylish addition to any home. Its soft, plush texture and sleek, contemporary look make it a popular choice for those looking to add comfort and style to their living space.",
          "en-US": "A modern shag carpet is a type of rug or carpet with a long, plush pile that is known for its softness and comfort. Unlike traditional shag carpets, which were popular in the 1970s and had a somewhat shaggy and unkempt appearance, modern shag carpets are more refined and have a sleek, contemporary look.  In addition to their softness and comfort, modern shag carpets are also known for their ability to absorb sound and create a cozy, inviting atmosphere. They are often used in living rooms, bedrooms, and other spaces where comfort and style are important.  Overall, a modern shag carpet is a luxurious and stylish addition to any home. Its soft, plush texture and sleek, contemporary look make it a popular choice for those looking to add comfort and style to their living space.",
          "fr": undefined,
        },
        "key": "ashen-rug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- 5 Fuß x 7 Fuß
      - Nur chemische Reinigung",
                "en-GB": "- 5ft x 7ft
      - Dry-clean only",
                "en-US": "- 5ft x 7ft
      - Dry-clean only",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#808080",
                "label": {
                  "de-DE": "Grau",
                  "en-GB": "Gray",
                  "en-US": "Gray",
                },
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "#E3E4E4",
                "en-GB": "#E3E4E4",
                "en-US": "#E3E4E4",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Aschfahl",
                "en-GB": "Ashen",
                "en-US": "Ashen",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3000,
                "w": 4500,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_269458700-8eM42pqK.jpeg",
            },
            {
              "dimensions": {
                "h": 3000,
                "w": 4500,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_269458689-9cU_vBM2.jpeg",
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
                "centAmount": 19999,
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
                "centAmount": 19999,
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
                "centAmount": 25000,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "ARG-56",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Teppich "Ashen"",
          "en": undefined,
          "en-GB": "Ashen Rug",
          "en-US": "Ashen Rug",
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
          "de-DE": "ashen-teppich",
          "en": undefined,
          "en-GB": "ashen-rug",
          "en-US": "ashen-rug",
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

  it(`should return a ashenRug preset when built for graphql`, () => {
    const ashenRugPresetGraphql = ashenRug().buildGraphql<TProductDraft>();
    expect(ashenRugPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "__typename": "Reference",
            "key": "rugs",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "room-decor",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A modern shag carpet is a type of rug or carpet with a long, plush pile that is known for its softness and comfort. Unlike traditional shag carpets, which were popular in the 1970s and had a somewhat shaggy and unkempt appearance, modern shag carpets are more refined and have a sleek, contemporary look.  In addition to their softness and comfort, modern shag carpets are also known for their ability to absorb sound and create a cozy, inviting atmosphere. They are often used in living rooms, bedrooms, and other spaces where comfort and style are important.  Overall, a modern shag carpet is a luxurious and stylish addition to any home. Its soft, plush texture and sleek, contemporary look make it a popular choice for those looking to add comfort and style to their living space.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A modern shag carpet is a type of rug or carpet with a long, plush pile that is known for its softness and comfort. Unlike traditional shag carpets, which were popular in the 1970s and had a somewhat shaggy and unkempt appearance, modern shag carpets are more refined and have a sleek, contemporary look.  In addition to their softness and comfort, modern shag carpets are also known for their ability to absorb sound and create a cozy, inviting atmosphere. They are often used in living rooms, bedrooms, and other spaces where comfort and style are important.  Overall, a modern shag carpet is a luxurious and stylish addition to any home. Its soft, plush texture and sleek, contemporary look make it a popular choice for those looking to add comfort and style to their living space.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Ein moderner Shag-Teppich ist eine Art Vorleger oder Teppich mit langem Plüschflor, der für seine Weichheit und seinen Komfort bekannt ist. Im Gegensatz zu traditionellen Shag-Teppichen, die in den 1970er Jahren beliebt waren und ein etwas zotteliges und ungepflegtes Aussehen hatten, sind moderne Shag-Teppiche raffinierter und haben ein elegantes, zeitgemäßes Aussehen.  Neben ihrer Weichheit und ihrem Komfort sind moderne Hochflorteppiche auch für ihre Fähigkeit bekannt, Schall zu absorbieren und eine gemütliche, einladende Atmosphäre zu schaffen. Sie werden oft in Wohnzimmern, Schlafzimmern und anderen Räumen verwendet, in denen Komfort und Stil wichtig sind.  Ein moderner Hochflorteppich ist eine luxuriöse und stilvolle Ergänzung für jedes Zuhause. Seine weiche, plüschige Textur und sein schlankes, modernes Aussehen machen ihn zu einer beliebten Wahl für diejenigen, die ihrem Wohnraum Komfort und Stil verleihen möchten.",
          },
        ],
        "key": "ashen-rug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- 5ft x 7ft\\n- Dry-clean only","de-DE":"- 5 Fuß x 7 Fuß\\n- Nur chemische Reinigung","en-US":"- 5ft x 7ft\\n- Dry-clean only"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"#E3E4E4","de-DE":"#E3E4E4","en-US":"#E3E4E4"}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-GB":"Ashen","de-DE":"Aschfahl","en-US":"Ashen"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3000,
                "width": 4500,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_269458700-8eM42pqK.jpeg",
            },
            {
              "dimensions": {
                "height": 3000,
                "width": 4500,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_269458689-9cU_vBM2.jpeg",
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
                  "centAmount": 19999,
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
                  "centAmount": 19999,
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
                  "centAmount": 25000,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "ARG-56",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Ashen Rug",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Ashen Rug",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Teppich "Ashen"",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "__typename": "Reference",
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "ashen-rug",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "ashen-rug",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "ashen-teppich",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "__typename": "Reference",
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
