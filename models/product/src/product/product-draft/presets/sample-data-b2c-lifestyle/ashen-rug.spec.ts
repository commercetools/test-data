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
              "name": "color",
              "value": {
                "de-DE": "Gainsboro:#dcdcdc",
                "en-GB": "Gainsboro:#dcdcdc",
                "en-US": "Gainsboro:#dcdcdc",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ashen_Rug-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 3000,
                "w": 4500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ashen_Rug-1.2.jpeg",
            },
          ],
          "key": "ashenRug01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "19999EUR",
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
              "key": "19999GBP",
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
              "key": "19999USD",
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
        "description": [
          {
            "locale": "en-GB",
            "value": "A modern shag carpet is a type of rug or carpet with a long, plush pile that is known for its softness and comfort. Unlike traditional shag carpets, which were popular in the 1970s and had a somewhat shaggy and unkempt appearance, modern shag carpets are more refined and have a sleek, contemporary look.  In addition to their softness and comfort, modern shag carpets are also known for their ability to absorb sound and create a cozy, inviting atmosphere. They are often used in living rooms, bedrooms, and other spaces where comfort and style are important.  Overall, a modern shag carpet is a luxurious and stylish addition to any home. Its soft, plush texture and sleek, contemporary look make it a popular choice for those looking to add comfort and style to their living space.",
          },
          {
            "locale": "en-US",
            "value": "A modern shag carpet is a type of rug or carpet with a long, plush pile that is known for its softness and comfort. Unlike traditional shag carpets, which were popular in the 1970s and had a somewhat shaggy and unkempt appearance, modern shag carpets are more refined and have a sleek, contemporary look.  In addition to their softness and comfort, modern shag carpets are also known for their ability to absorb sound and create a cozy, inviting atmosphere. They are often used in living rooms, bedrooms, and other spaces where comfort and style are important.  Overall, a modern shag carpet is a luxurious and stylish addition to any home. Its soft, plush texture and sleek, contemporary look make it a popular choice for those looking to add comfort and style to their living space.",
          },
          {
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
              "name": "color",
              "value": "{"en-GB":"Gainsboro:#dcdcdc","de-DE":"Gainsboro:#dcdcdc","en-US":"Gainsboro:#dcdcdc"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3000,
                "width": 4500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ashen_Rug-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 3000,
                "width": 4500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ashen_Rug-1.2.jpeg",
            },
          ],
          "key": "ashenRug01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "19999EUR",
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
              "key": "19999GBP",
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
              "key": "19999USD",
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
            "locale": "en-US",
            "value": "Ashen Rug",
          },
          {
            "locale": "en-GB",
            "value": "Ashen Rug",
          },
          {
            "locale": "de-DE",
            "value": "Teppich "Ashen"",
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
            "value": "ashen-rug",
          },
          {
            "locale": "en-GB",
            "value": "ashen-rug",
          },
          {
            "locale": "de-DE",
            "value": "ashen-teppich",
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
