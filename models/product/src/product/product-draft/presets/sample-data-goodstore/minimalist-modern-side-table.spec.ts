import type { TProductDraft } from '../../../types';
import minimalistModernSideTable from './minimalist-modern-side-table';

describe(`with minimalistModernSideTable preset`, () => {
  it(`should return a minimalistModernSideTable preset`, () => {
    const minimalistModernSideTablePreset =
      minimalistModernSideTable().build<TProductDraft>();
    expect(minimalistModernSideTablePreset).toMatchInlineSnapshot(`
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
            "key": "new-arrivals",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          },
          {
            "key": "the-minimalist",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "key": "minimalist-modern-side-table",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "color",
    "value": {
      "en-US": "white",
      "en-GB": "#FFF",
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
      "en-US": "white",
      "en-GB": "#FFF",
      "de-DE": "white"
    }
  },
  {
    "name": "finishlabel",
    "value": {
      "en-US": "Marble",
      "en-GB": "Marble",
      "de-DE": "Marble"
    }
  },
  {
    "name": "productspec",
    "value": {
      "en-US": "- 4 legged side table\n- Walnut legs\n- Pre-assembled",
      "en-GB": "- 4 legged side table\n- Walnut legs\n- Pre-assembled",
      "de-DE": "- 4 legged side table\n- Walnut legs\n- Pre-assembled"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "A minimalist side table with a round top and 4 tapered legs at a slant is a simple and stylish piece of furniture that can add a touch of contemporary elegance to any living space. The table features a round or circular top that is made of wood.  The top of the table is supported by four tapered legs that are set at a slight angle, giving the table a unique and modern look. The legs are made of wood.  The minimalist design of the side table emphasizes simplicity and functionality, with a clean and uncluttered look that is both stylish and practical. The table's compact size makes it an ideal choice for small living spaces or as an accent piece in a larger room.  The table can be used to display decorative items such as vases, picture frames, or sculptures, or as a functional surface for drinks, snacks, or books. Its simple and unobtrusive design allows it to blend seamlessly with a variety of interior design styles, from modern and contemporary to traditional and rustic.  Overall, a minimalist side table with a round top and 4 tapered legs at a slant is a stylish and versatile piece of furniture that can add a touch of sophistication to any living space. Its sleek and simple design, combined with its functional features, make it a practical and stylish choice for any home.",
      "en-US": "A minimalist side table with a round top and 4 tapered legs at a slant is a simple and stylish piece of furniture that can add a touch of contemporary elegance to any living space. The table features a round or circular top that is made of wood.  The top of the table is supported by four tapered legs that are set at a slight angle, giving the table a unique and modern look. The legs are made of wood.  The minimalist design of the side table emphasizes simplicity and functionality, with a clean and uncluttered look that is both stylish and practical. The table's compact size makes it an ideal choice for small living spaces or as an accent piece in a larger room.  The table can be used to display decorative items such as vases, picture frames, or sculptures, or as a functional surface for drinks, snacks, or books. Its simple and unobtrusive design allows it to blend seamlessly with a variety of interior design styles, from modern and contemporary to traditional and rustic.  Overall, a minimalist side table with a round top and 4 tapered legs at a slant is a stylish and versatile piece of furniture that can add a touch of sophistication to any living space. Its sleek and simple design, combined with its functional features, make it a practical and stylish choice for any home.",
      "de-DE": "Ein minimalistischer Beistelltisch mit runder Platte und 4 schräg zulaufenden Beinen ist ein schlichtes und stilvolles Möbelstück, das jedem Wohnraum einen Hauch zeitgemäßer Eleganz verleihen kann. Der Tisch hat eine runde oder runde Platte aus Holz.  Die Tischplatte wird von vier sich verjüngenden Beinen getragen, die leicht angewinkelt sind und dem Tisch ein einzigartiges und modernes Aussehen verleihen. Die Beine sind aus Holz.  Das minimalistische Design des Beistelltisches betont Einfachheit und Funktionalität, mit einem sauberen und übersichtlichen Look, der sowohl stilvoll als auch praktisch ist. Die kompakte Größe des Tisches macht ihn zur idealen Wahl für kleine Wohnräume oder als Akzentstück in einem größeren Raum.  Der Tisch kann zur Präsentation von Dekorationsgegenständen wie Vasen, Bilderrahmen oder Skulpturen oder als funktionale Ablage für Getränke, Snacks oder Bücher verwendet werden. Durch sein schlichtes und unaufdringliches Design fügt es sich nahtlos in eine Vielzahl von Einrichtungsstilen ein, von modern und zeitgenössisch bis hin zu traditionell und rustikal.  Insgesamt ist ein minimalistischer Beistelltisch mit runder Platte und 4 schräg zulaufenden Beinen ein stilvolles und vielseitiges Möbelstück, das jedem Wohnraum einen Hauch von Raffinesse verleihen kann. Sein schlankes und einfaches Design, kombiniert mit seinen funktionalen Eigenschaften, machen es zu einer praktischen und stilvollen Wahl für jedes Zuhause."
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
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_308570068-ftaFzBEg.jpeg",
    "dimensions": {
      "w": 6000,
      "h": 6232
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_314247429-Qt_DKygA.jpeg",
    "dimensions": {
      "w": 3758,
      "h": 3758
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
      "centAmount": 12000,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 12000,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 12000,
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
            "en-US": "Minimalist Modern Side Table",
            "en-GB": "Minimalist Modern Side Table",
            "de-DE": "Minimalistischer moderner Beistelltisch"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "en-US": "minimalist-modern-side-table",
            "de-DE": "minimalistischer-moderner-beistelltisch",
            "en-GB": "minimalist-modern-side-table"
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
