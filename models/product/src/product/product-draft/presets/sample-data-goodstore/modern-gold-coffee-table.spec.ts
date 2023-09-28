import type { TProductDraft } from '../../../types';
import modernGoldCoffeeTable from './modern-gold-coffee-table';

describe(`with modernGoldCoffeeTable preset`, () => {
  it(`should return a modernGoldCoffeeTable preset`, () => {
    const modernGoldCoffeeTablePreset =
      modernGoldCoffeeTable().build<TProductDraft>();
    expect(modernGoldCoffeeTablePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "tables",
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
            "key": "collections",
            "typeId": "category",
          },
          {
            "key": "the-modernist",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "key": "modern-gold-coffee-table",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "color",
    "value": {
      "en-US": "white",
      "en-GB": "white",
      "de-DE": "white"
    }
  },
  {
    "name": "colorlabel",
    "value": {
      "en-US": "White",
      "en-GB": "White",
      "de-DE": "White"
    }
  },
  {
    "name": "finish",
    "value": {
      "en-US": "gold",
      "en-GB": "gold",
      "de-DE": "gold"
    }
  },
  {
    "name": "finishlabel",
    "value": {
      "en-US": "Gold",
      "en-GB": "Gold",
      "de-DE": "Gold"
    }
  },
  {
    "name": "productspec",
    "value": {
      "en-US": "- Length: 5 feet\n- Width: 3 feet\n- Height: 2 feet\n- Tables made of plastic laminate on manufactured wood\n- Gold finish on legs\n- Preassembled",
      "en-GB": "- Length: 5 feet\n- Width: 3 feet\n- Height: 2 feet\n- Tables made of plastic laminate on manufactured wood\n- Gold finish on legs\n- Preassembled",
      "de-DE": "- Length: 5 feet\n- Width: 3 feet\n- Height: 2 feet\n- Tables made of plastic laminate on manufactured wood\n- Gold finish on legs\n- Preassembled"
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
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "A modern gold coffee table with 2 tiers of quartz table tops is a stunning and stylish piece of furniture that can elevate the look of any living room or sitting area. The table is characterized by a sleek and streamlined design, with clean lines and minimalistic details.  The coffee table features a sturdy metal frame that is finished in a luxurious gold color, providing a touch of sophistication and glamour. The frame is designed to support two tiers of table tops, both made of high-quality quartz material. The quartz table tops are cut in a rectangular shape, with a smooth and glossy surface that adds a touch of elegance to the table.  The two tiers of table tops provide ample storage and display space, allowing you to showcase decorative items such as books, candles, or vases, while still providing plenty of room for drinks and snacks. The two-tier design also adds visual interest and dimension to the table, creating a unique and eye-catching look.  The modern gold coffee table is a versatile piece of furniture that can complement a range of interior design styles, from contemporary and minimalist to more traditional and eclectic. It can be paired with a variety of seating options, from sofas and chairs to benches and stools, to create a cohesive and stylish living space.  Overall, a modern gold coffee table is a chic and elegant piece of furniture that can add a touch of luxury and sophistication to any living room or sitting area. Its sleek design, high-quality materials, and practical features make it a functional and stylish choice for any home.",
      "en-US": "A modern gold coffee table with 2 tiers of quartz table tops is a stunning and stylish piece of furniture that can elevate the look of any living room or sitting area. The table is characterized by a sleek and streamlined design, with clean lines and minimalistic details.  The coffee table features a sturdy metal frame that is finished in a luxurious gold color, providing a touch of sophistication and glamour. The frame is designed to support two tiers of table tops, both made of high-quality quartz material. The quartz table tops are cut in a rectangular shape, with a smooth and glossy surface that adds a touch of elegance to the table.  The two tiers of table tops provide ample storage and display space, allowing you to showcase decorative items such as books, candles, or vases, while still providing plenty of room for drinks and snacks. The two-tier design also adds visual interest and dimension to the table, creating a unique and eye-catching look.  The modern gold coffee table is a versatile piece of furniture that can complement a range of interior design styles, from contemporary and minimalist to more traditional and eclectic. It can be paired with a variety of seating options, from sofas and chairs to benches and stools, to create a cohesive and stylish living space.  Overall, a modern gold coffee table is a chic and elegant piece of furniture that can add a touch of luxury and sophistication to any living room or sitting area. Its sleek design, high-quality materials, and practical features make it a functional and stylish choice for any home.",
      "de-DE": "Ein moderner Gold-Couchtisch mit 2 Ebenen aus Quarz-Tischplatten ist ein atemberaubendes und stilvolles Möbelstück, das das Aussehen jedes Wohnzimmers oder Sitzbereichs aufwerten kann. Der Tisch zeichnet sich durch ein schlankes und stromlinienförmiges Design mit klaren Linien und minimalistischen Details aus.  Der Couchtisch verfügt über einen stabilen Metallrahmen, der in einer luxuriösen Goldfarbe gehalten ist und einen Hauch von Raffinesse und Glamour verleiht. Der Rahmen ist so konzipiert, dass er zwei Ebenen von Tischplatten trägt, die beide aus hochwertigem Quarzmaterial bestehen. Die Quarz-Tischplatten sind rechteckig geschnitten und haben eine glatte und glänzende Oberfläche, die dem Tisch einen Hauch von Eleganz verleiht.  Die zwei Ebenen der Tischplatten bieten viel Stauraum und Ausstellungsfläche, sodass Sie dekorative Gegenstände wie Bücher, Kerzen oder Vasen präsentieren können und gleichzeitig viel Platz für Getränke und Snacks bieten. Das zweistufige Design verleiht dem Tisch auch visuelles Interesse und Dimension und schafft einen einzigartigen und auffälligen Look.  Der moderne goldene Couchtisch ist ein vielseitiges Möbelstück, das eine Reihe von Einrichtungsstilen ergänzen kann, von zeitgenössisch und minimalistisch bis hin zu eher traditionell und vielseitig. Es kann mit einer Vielzahl von Sitzmöglichkeiten kombiniert werden, von Sofas und Stühlen bis hin zu Bänken und Hockern, um einen zusammenhängenden und stilvollen Wohnraum zu schaffen.  Insgesamt ist ein moderner goldener Couchtisch ein schickes und elegantes Möbelstück, das jedem Wohnzimmer oder Sitzbereich einen Hauch von Luxus und Raffinesse verleihen kann. Sein schlankes Design, hochwertige Materialien und praktische Funktionen machen es zu einer funktionalen und stilvollen Wahl für jedes Zuhause."
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305817901-_VzWvTVC.jpeg",
    "dimensions": {
      "w": 2500,
      "h": 2500
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305817943-3J3g-cMr.jpeg",
    "dimensions": {
      "w": 2500,
      "h": 2500
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305817870-vzJpmAw7.jpeg",
    "dimensions": {
      "w": 2500,
      "h": 2500
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305818013-8aFJP8rs.jpeg",
    "dimensions": {
      "w": 2500,
      "h": 2500
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
      "centAmount": 25999,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 25999,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 25999,
      "fractionDigits": 2
    },
    "country": "US"
  }
]
,
        },
      "metaTitle": {
            "en-US": "",
            "de-DE": ""
          },
      "name": {
            "en-US": "Modern Gold Coffee Table",
            "en-GB": "Modern Gold Coffee Table",
            "de-DE": "Moderner Couchtisch in Gold"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "en-US": "modern-gold-coffee-table",
            "de-DE": "moderner-couchtisch-in-gold",
            "en-GB": "modern-gold-coffee-table"
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
