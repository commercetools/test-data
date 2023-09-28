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
        "key": "ashen-rug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- 5ft x 7ft\n- Dry-clean only",
      "de-DE": "- 5 Fuß x 7 Fuß\n- Nur chemische Reinigung",
      "en-US": "- 5ft x 7ft\n- Dry-clean only"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "A modern shag carpet is a type of rug or carpet with a long, plush pile that is known for its softness and comfort. Unlike traditional shag carpets, which were popular in the 1970s and had a somewhat shaggy and unkempt appearance, modern shag carpets are more refined and have a sleek, contemporary look.  In addition to their softness and comfort, modern shag carpets are also known for their ability to absorb sound and create a cozy, inviting atmosphere. They are often used in living rooms, bedrooms, and other spaces where comfort and style are important.  Overall, a modern shag carpet is a luxurious and stylish addition to any home. Its soft, plush texture and sleek, contemporary look make it a popular choice for those looking to add comfort and style to their living space.",
      "en-US": "A modern shag carpet is a type of rug or carpet with a long, plush pile that is known for its softness and comfort. Unlike traditional shag carpets, which were popular in the 1970s and had a somewhat shaggy and unkempt appearance, modern shag carpets are more refined and have a sleek, contemporary look.  In addition to their softness and comfort, modern shag carpets are also known for their ability to absorb sound and create a cozy, inviting atmosphere. They are often used in living rooms, bedrooms, and other spaces where comfort and style are important.  Overall, a modern shag carpet is a luxurious and stylish addition to any home. Its soft, plush texture and sleek, contemporary look make it a popular choice for those looking to add comfort and style to their living space.",
      "de-DE": "Ein moderner Shag-Teppich ist eine Art Vorleger oder Teppich mit einem langen Plüschflor, der für seine Weichheit und seinen Komfort bekannt ist. Im Gegensatz zu traditionellen Shag-Teppichen, die in den 1970er Jahren beliebt waren und ein etwas zotteliges und ungepflegtes Aussehen hatten, sind moderne Shag-Teppiche raffinierter und haben ein elegantes, zeitgemäßes Aussehen.  Neben ihrer Weichheit und ihrem Komfort sind moderne Hochflorteppiche auch für ihre Fähigkeit bekannt, Schall zu absorbieren und eine gemütliche, einladende Atmosphäre zu schaffen. Sie werden oft in Wohnzimmern, Schlafzimmern und anderen Räumen verwendet, in denen Komfort und Stil wichtig sind.  Insgesamt ist ein moderner Hochflorteppich eine luxuriöse und stilvolle Ergänzung für jedes Zuhause. Seine weiche, plüschige Textur und sein schlankes, modernes Aussehen machen es zu einer beliebten Wahl für diejenigen, die ihrem Wohnraum Komfort und Stil verleihen möchten."
    }
  },
  {
    "name": "color-filter",
    "value": {
      "key": "#808080",
      "label": {
        "de-DE": "Grau",
        "en-GB": "Gray",
        "en-US": "Gray"
      }
    }
  },
  {
    "name": "color",
    "value": {
      "en-GB": "#E3E4E4",
      "de-DE": "#E3E4E4",
      "en-US": "#E3E4E4"
    }
  },
  {
    "name": "colorlabel",
    "value": {
      "en-GB": "Ashen",
      "de-DE": "Aschfahl",
      "en-US": "Ashen"
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_269458700-8eM42pqK.jpeg",
    "dimensions": {
      "w": 4500,
      "h": 3000
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_269458689-9cU_vBM2.jpeg",
    "dimensions": {
      "w": 4500,
      "h": 3000
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
      "centAmount": 19999,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 19999,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 25000,
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
            "de-DE": "Teppich "Ashen"",
            "en-GB": "Ashen Rug",
            "en-US": "Ashen Rug"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "ashen-teppich",
            "en-GB": "ashen-rug",
            "en-US": "ashen-rug"
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
