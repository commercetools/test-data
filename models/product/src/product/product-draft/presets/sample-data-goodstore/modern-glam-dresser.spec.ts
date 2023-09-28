import type { TProductDraft } from '../../../types';
import modernGlamDresser from './modern-glam-dresser';

describe(`with modernGlamDresser preset`, () => {
  it(`should return a modernGlamDresser preset`, () => {
    const modernGlamDresserPreset = modernGlamDresser().build<TProductDraft>();
    expect(modernGlamDresserPreset).toMatchInlineSnapshot(`
      {
        "categories": [
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
          {
            "key": "storage--tables",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "key": "modern-glam-dresser",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "finish",
    "value": {
      "en-US": "silver",
      "en-GB": "#8A8071",
      "de-DE": "silver"
    }
  },
  {
    "name": "finishlabel",
    "value": {
      "en-US": "Suede",
      "en-GB": "Suede",
      "de-DE": "Suede"
    }
  },
  {
    "name": "productspec",
    "value": {
      "en-US": "- 3 large drawers\n- suede  and nickel finish on drawer handles\n- assembly on site",
      "en-GB": "- 3 large drawers\n- suede  and nickel finish on drawer handles\n- assembly on site",
      "de-DE": "- 3 large drawers\n- suede  and nickel finish on drawer handles\n- assembly on site"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "A modern glam dresser is a stylish and elegant piece of furniture that combines modern design with glamorous accents. It features clean lines, sleek surfaces, and metallic finishes, creating a chic and sophisticated look that adds a touch of luxury to any bedroom.  The dresser is made of high-quality materials. The drawers are spacious and easy to open and close, providing ample storage space for clothing, accessories, and other items.  The dresser also features glamorous metal accents handles, adding a touch of elegance and sophistication to the piece. The overall design of the dresser is sleek and minimalist, with an emphasis on clean lines and simple shapes.  A modern glam dresser can be a beautiful addition to any bedroom, adding a touch of luxury and sophistication to the space. Its clean lines, metallic finishes, and glamorous accents create a modern and elegant look that can complement a variety of decor styles.",
      "en-US": "A modern glam dresser is a stylish and elegant piece of furniture that combines modern design with glamorous accents. It features clean lines, sleek surfaces, and metallic finishes, creating a chic and sophisticated look that adds a touch of luxury to any bedroom.  The dresser is made of high-quality materials. The drawers are spacious and easy to open and close, providing ample storage space for clothing, accessories, and other items.  The dresser also features glamorous metal accents handles, adding a touch of elegance and sophistication to the piece. The overall design of the dresser is sleek and minimalist, with an emphasis on clean lines and simple shapes.  A modern glam dresser can be a beautiful addition to any bedroom, adding a touch of luxury and sophistication to the space. Its clean lines, metallic finishes, and glamorous accents create a modern and elegant look that can complement a variety of decor styles.",
      "de-DE": "Eine Modern Glam Kommode ist ein stilvolles und elegantes Möbelstück, das modernes Design mit glamourösen Akzenten verbindet. Es zeichnet sich durch klare Linien, glatte Oberflächen und Metallic-Oberflächen aus und schafft einen schicken und raffinierten Look, der jedem Schlafzimmer einen Hauch von Luxus verleiht.  Die Kommode ist aus hochwertigen Materialien gefertigt. Die Schubladen sind geräumig und leicht zu öffnen und zu schließen und bieten ausreichend Stauraum für Kleidung, Accessoires und andere Gegenstände.  Die Kommode verfügt auch über glamouröse Griffe mit Metallakzenten, die dem Stück einen Hauch von Eleganz und Raffinesse verleihen. Das Gesamtdesign der Kommode ist schlicht und minimalistisch, mit Betonung auf klaren Linien und einfachen Formen.  Eine moderne, glamouröse Kommode kann eine schöne Ergänzung für jedes Schlafzimmer sein und dem Raum einen Hauch von Luxus und Raffinesse verleihen. Seine klaren Linien, metallischen Oberflächen und glamourösen Akzente schaffen einen modernen und eleganten Look, der eine Vielzahl von Einrichtungsstilen ergänzen kann."
    }
  },
  {
    "name": "color-filter",
    "value": {
      "key": "#C0C0C0",
      "label": {
        "de-DE": "Silber",
        "en-GB": "Silver",
        "en-US": "Silver"
      }
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305650073-NL2GuIBX.jpeg",
    "dimensions": {
      "w": 2500,
      "h": 2500
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305650236-phU3WdJ7.jpeg",
    "dimensions": {
      "w": 2500,
      "h": 2500
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305652757--mQZtlpW.jpeg",
    "dimensions": {
      "w": 5760,
      "h": 3840
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
      "centAmount": 179900,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 179900,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 179900,
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
            "en-US": "Modern Glam Dresser",
            "en-GB": "Modern Glam Dresser",
            "de-DE": "Moderne glamouröse Kommode"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "en-US": "modern-glam-dresser",
            "de-DE": "moderne-glamourse-kommode",
            "en-GB": "modern-glam-dresser"
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
