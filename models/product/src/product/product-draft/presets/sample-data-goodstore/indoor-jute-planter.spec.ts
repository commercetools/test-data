import type { TProductDraft } from '../../../types';
import indoorJutePlanter from './indoor-jute-planter';

describe(`with indoorJutePlanter preset`, () => {
  it(`should return a indoorJutePlanter preset`, () => {
    const indoorJutePlanterPreset = indoorJutePlanter().build<TProductDraft>();
    expect(indoorJutePlanterPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "room-decor",
            "typeId": "category",
          },
          {
            "key": "home-accents",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "key": "indoor-jute-planter",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Plant not included",
      "en-US": "- Plant not included",
      "de-DE": "- Pflanze nicht im Lieferumfang enthalten"
    }
  },
  {
    "name": "size",
    "value": {
      "en-GB": "Large"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "An indoor jute planter for plants is a decorative and eco-friendly way to display greenery in your home. The planter is made from natural jute fibers, which are woven into a sturdy and breathable container for your plants.  The neutral color of the jute fibers complements the natural color of plants, making them stand out beautifully.  The jute fibers of the planter are absorbent, allowing for proper drainage and air circulation for the plant roots. This helps to prevent root rot and other soil-borne diseases, ensuring healthy plant growth.  Overall, an indoor jute planter is a charming and practical way to bring a touch of nature into your home, while also being kind to the planet.",
      "en-US": "An indoor jute planter for plants is a decorative and eco-friendly way to display greenery in your home. The planter is made from natural jute fibers, which are woven into a sturdy and breathable container for your plants.  The neutral color of the jute fibers complements the natural color of plants, making them stand out beautifully.  The jute fibers of the planter are absorbent, allowing for proper drainage and air circulation for the plant roots. This helps to prevent root rot and other soil-borne diseases, ensuring healthy plant growth.  Overall, an indoor jute planter is a charming and practical way to bring a touch of nature into your home, while also being kind to the planet.",
      "de-DE": "Ein Indoor-Blumentopf für Pflanzen ist eine dekorative und umweltfreundliche Möglichkeit, Pflanzen in Ihrem Zuhause zu präsentieren. Der Blumentopf besteht aus natürlichen Jutefasern, die zu einem robusten und atmungsaktiven Behälter für Ihre Pflanzen verwoben sind.  Die neutrale Farbe der Jutefasern ergänzt die natürliche Farbe der Pflanzen und lässt sie schön zur Geltung kommen.  Die Jutefasern des Blumentopfes sind saugfähig und ermöglichen eine ordnungsgemäße Drainage und Luftzirkulation für die Pflanzenwurzeln. Dies trägt dazu bei, Wurzelfäule und andere bodenbürtige Krankheiten zu verhindern und ein gesundes Pflanzenwachstum zu gewährleisten.  Insgesamt ist ein Blumentopf aus Jute für den Innenbereich eine charmante und praktische Möglichkeit, einen Hauch von Natur in Ihr Zuhause zu bringen und gleichzeitig den Planeten zu schonen."
    }
  },
  {
    "name": "color-filter",
    "value": {
      "key": "#000",
      "label": {
        "de-DE": "Schwarz",
        "en-GB": "Black",
        "en-US": "Black"
      }
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_419644892-f445UIr6.jpeg",
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
      "centAmount": 3299,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 3299,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 3299,
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
            "de-DE": "Indoor Blumentopf aus Jute",
            "en-GB": "Indoor Jute Planter",
            "en-US": "Indoor Jute Planter"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "indoor-jute-planter",
            "en-GB": "indoor-jute-planter",
            "en-US": "indoor-jute-planter"
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
