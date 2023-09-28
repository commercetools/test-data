import type { TProductDraft } from '../../../types';
import tanQueenBed from './tan-queen-bed';

describe(`with tanQueenBed preset`, () => {
  it(`should return a tanQueenBed preset`, () => {
    const tanQueenBedPreset = tanQueenBed().build<TProductDraft>();
    expect(tanQueenBedPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "beds",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "key": "tan-queen-bed",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Assembly included in delivery",
      "de-DE": "- Montage im Lieferumfang enthalten",
      "en-US": "- Assembly included in delivery"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "A queen bed with a padded leather headboard is a stylish and sophisticated piece of furniture. The headboard is tall and wide, featuring a padded design with luxurious leather upholstery that provides a comfortable place to lean against when sitting up in bed. The leather is soft and supple, adding a touch of elegance and refinement to the bed.  The bed frame is made of sturdy wood and is finished in a complementary color to the leather headboard. The bed also has a platform base, providing a solid foundation for the mattress while also eliminating the need for a box spring.  This type of bed is often favored in contemporary or transitional design styles and can be paired with a range of bedding and decor to create a luxurious and inviting sleeping space. Overall, a queen bed with a padded leather headboard is a statement piece that adds both comfort and style to any bedroom.",
      "en-US": "A queen bed with a padded leather headboard is a stylish and sophisticated piece of furniture. The headboard is tall and wide, featuring a padded design with luxurious leather upholstery that provides a comfortable place to lean against when sitting up in bed. The leather is soft and supple, adding a touch of elegance and refinement to the bed.  The bed frame is made of sturdy wood and is finished in a complementary color to the leather headboard. The bed also has a platform base, providing a solid foundation for the mattress while also eliminating the need for a box spring.  This type of bed is often favored in contemporary or transitional design styles and can be paired with a range of bedding and decor to create a luxurious and inviting sleeping space. Overall, a queen bed with a padded leather headboard is a statement piece that adds both comfort and style to any bedroom.",
      "de-DE": "Ein Queensize-Bett mit gepolstertem Kopfteil aus Leder ist ein stilvolles und raffiniertes Möbelstück. Das Kopfteil ist hoch und breit und verfügt über ein gepolstertes Design mit luxuriöser Lederpolsterung, die einen bequemen Platz zum Anlehnen bietet, wenn Sie im Bett sitzen. Das Leder ist weich und geschmeidig und verleiht dem Bett einen Hauch von Eleganz und Raffinesse.  Der Bettrahmen besteht aus stabilem Holz und ist in einer Komplementärfarbe zum Lederkopfteil ausgeführt. Das Bett hat auch einen Plattformboden, der eine solide Grundlage für die Matratze bietet und gleichzeitig die Notwendigkeit eines Boxspringbetts überflüssig macht.  Diese Art von Bett wird oft in zeitgenössischen oder Übergangsdesignstilen bevorzugt und kann mit einer Reihe von Betten und Dekorationen kombiniert werden, um einen luxuriösen und einladenden Schlafbereich zu schaffen. Insgesamt ist ein Queensize-Bett mit einem gepolsterten Kopfteil aus Leder ein Statement-Stück, das jedem Schlafzimmer sowohl Komfort als auch Stil verleiht."
    }
  },
  {
    "name": "color-filter",
    "value": {
      "key": "#D2B48C",
      "label": {
        "de-DE": "Bräunen",
        "en-GB": "Tan",
        "en-US": "Tan"
      }
    }
  },
  {
    "name": "colorlabel",
    "value": {
      "en-GB": "Tan",
      "de-DE": "Bräunen",
      "en-US": "Tan"
    }
  },
  {
    "name": "color",
    "value": {
      "en-GB": "#503A01",
      "de-DE": "#503A01",
      "en-US": "#503A01"
    }
  },
  {
    "name": "finishlabel",
    "value": {
      "en-GB": "Briarsmoke",
      "de-DE": "Briarsmoke",
      "en-US": "Briarsmoke"
    }
  },
  {
    "name": "finish",
    "value": {
      "en-GB": "#5B523C",
      "de-DE": "#5B523C",
      "en-US": "#5B523C"
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Tan%20Twin%20Bed-Og9KvV6W.jpeg",
    "dimensions": {
      "w": 5000,
      "h": 3621
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
      "centAmount": 129900,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 129900,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 129900,
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
            "de-DE": "Hellbraunes Queen-Bett",
            "en-GB": "Tan Queen Bed",
            "en-US": "Tan Queen Bed"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "hellbraunes-queen-bett",
            "en-GB": "tan-queen-bed",
            "en-US": "tan-queen-bed"
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
