import type { TProductDraft } from '../../../types';
import ivoryLoungeChair from './ivory-lounge-chair';

describe(`with ivoryLoungeChair preset`, () => {
  it(`should return a ivoryLoungeChair preset`, () => {
    const ivoryLoungeChairPreset = ivoryLoungeChair().build<TProductDraft>();
    expect(ivoryLoungeChairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "new-arrivals",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "armchairs",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "key": "ivory-lounge-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Dry clean only\n- Assembly included in delivery",
      "de-DE": "- Nur chemische Reinigung\n- Montage im Lieferumfang enthalten",
      "en-US": "- Dry clean only\n- Assembly included in delivery"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "This arm chair is a bold and funky piece of furniture that takes its inspiration from the eclectic styles of the 1970s. The chair features a round, circular shape, with a low backrest and generously padded seat that provide comfortable seating for extended periods of time.  The arms of the chair are wide and round, creating a comfortable and supportive space for you to rest your arms while lounging.   Overall, a 70's inspired round arm chair is a playful and fun piece of furniture that can add a touch of retro flair to any room. Its round shape and generous padding, make it a comfortable and inviting spot for lounging and relaxation.",
      "en-US": "This arm chair is a bold and funky piece of furniture that takes its inspiration from the eclectic styles of the 1970s. The chair features a round, circular shape, with a low backrest and generously padded seat that provide comfortable seating for extended periods of time.  The arms of the chair are wide and round, creating a comfortable and supportive space for you to rest your arms while lounging.   Overall, a 70's inspired round arm chair is a playful and fun piece of furniture that can add a touch of retro flair to any room. Its round shape and generous padding, make it a comfortable and inviting spot for lounging and relaxation.",
      "de-DE": "Dieser Sessel ist ein kühnes und flippiges Möbelstück, das seine Inspiration aus den eklektischen Stilen der 1970er Jahre bezieht. Der Stuhl hat eine runde, kreisförmige Form mit einer niedrigen Rückenlehne und einer großzügig gepolsterten Sitzfläche, die für längere Zeit bequemen Sitz bietet.  Die Armlehnen des Stuhls sind breit und rund und schaffen einen bequemen und stützenden Platz, an dem Sie Ihre Arme beim Faulenzen ausruhen können.  Insgesamt ist ein von den 70er Jahren inspirierter runder Sessel ein verspieltes und lustiges Möbelstück, das jedem Raum einen Hauch von Retro-Flair verleihen kann. Seine runde Form und die großzügige Polsterung machen ihn zu einem komfortablen und einladenden Ort zum Faulenzen und Entspannen."
    }
  },
  {
    "name": "color",
    "value": {
      "en-GB": "#FFF",
      "de-DE": "#FFF",
      "en-US": "#FFF"
    }
  },
  {
    "name": "colorlabel",
    "value": {
      "en-GB": "Ivory",
      "de-DE": "Elfenbein",
      "en-US": "Ivory"
    }
  },
  {
    "name": "color-filter",
    "value": {
      "key": "#FFF",
      "label": {
        "de-DE": "Weiss",
        "en-GB": "White",
        "en-US": "White"
      }
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_425997376-rgouAPnE.jpeg",
    "dimensions": {
      "w": 5500,
      "h": 4400
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_433015214-W7glmC_k.jpeg",
    "dimensions": {
      "w": 3375,
      "h": 4500
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_417425585-8KQEao5y.jpeg",
    "dimensions": {
      "w": 3750,
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
      "centAmount": 29900,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 29900,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 29900,
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
            "de-DE": "Elfenbein-Lounge-Stuhl",
            "en-GB": "Ivory Lounge Chair",
            "en-US": "Ivory Lounge Chair"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "elfenbein-lounge-stuhl",
            "en-GB": "ivory-lounge-chair",
            "en-US": "ivory-lounge-chair"
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
