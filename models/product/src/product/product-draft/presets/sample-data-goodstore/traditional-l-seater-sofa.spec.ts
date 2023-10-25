import type { TProductDraft, TProductDraftGraphql } from '../../../types';
import traditionalLSeaterSofa from './traditional-l-seater-sofa';

describe(`with traditionalLSeaterSofa preset`, () => {
  it(`should return a traditionalLSeaterSofa preset`, () => {
    const traditionalLSeaterSofaPreset =
      traditionalLSeaterSofa().build<TProductDraft>();
    expect(traditionalLSeaterSofaPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "sofas",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "the-traditionalist",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Das traditionelle Ecksofa ist ein bequemes und praktisches Möbelstück. Das Sofa ist mit einem strapazierfähigen und hochwertigen Baumwollstoff bezogen und überzeugt mit einem klassischen und zeitlosen Design, das gut zu einer Vielzahl von Einrichtungsstilen passt.  Das Sofa bietet ausreichend Platz und Komfort für mehrere Personen. Es kann wie eine Chaiselongue genutzt werden und bietet einen Platz zum Ausstrecken und Entspannen. Das L-förmige Design des Sofas maximiert den Sitzplatz und bietet gleichzeitig einen komfortablen und einladenden Ort zum Entspannen und Erholen.  Das Sofa ist mit gepolsterten Armlehnen und Rückenlehnen ausgestattet, die dem Sitzenden ausreichend Halt und Komfort bieten. Die Kissen bestehen aus hochdichtem Schaumstoff, der die Form hält und das gute Sitzgefühl wahrt. Das Sofa wird darüber hinaus mit passenden Wurfkissen geliefert, die den Komfort und Stil des Sofas weiter unterstützen.  Das traditionelle L-förmiges Sofa ist ein bequemes und praktisches Möbelstück, das jedem Wohnzimmer sowohl Stil als auch Funktionalität verleiht. Sein klassisches und zeitloses Design, die bequemen Kissen und die großzügige Sitzfläche machen es zu einer beliebten Wahl für Familien und alle, die gerne Gäste in ihrem Zuhause zu empfangen.",
          "en": undefined,
          "en-GB": "A traditional L-shaped sofa is a comfortable and practical piece of furniture. The sofa is upholstered in a durable and high-quality fabric and features a classic and timeless design that can fit well with a variety of decor styles.  The sofa provides ample room for multiple people to sit comfortably. It also features a chaise lounge or a place to stretch out and relax. The L-shape design of the sofa maximizes seating space while also providing a comfortable and inviting space to relax and unwind.  The sofa features padded armrests and backrests, providing ample support and comfort for those who sit on it. The cushions are made of high-density foam, ensuring that they are comfortable and retain their shape over time. The sofa also comes with matching throw pillows, adding to the comfort and style of the piece.  Overall, a traditional L-shaped sofa is a comfortable and practical piece of furniture that can add both style and functionality to any living room. Its classic and timeless design, comfortable cushions, and ample seating space make it a popular choice for families and anyone who loves to entertain guests in their home.",
          "en-US": "A traditional L-shaped sofa is a comfortable and practical piece of furniture. The sofa is upholstered in a durable and high-quality fabric and features a classic and timeless design that can fit well with a variety of decor styles.  The sofa provides ample room for multiple people to sit comfortably. It also features a chaise lounge or a place to stretch out and relax. The L-shape design of the sofa maximizes seating space while also providing a comfortable and inviting space to relax and unwind.  The sofa features padded armrests and backrests, providing ample support and comfort for those who sit on it. The cushions are made of high-density foam, ensuring that they are comfortable and retain their shape over time. The sofa also comes with matching throw pillows, adding to the comfort and style of the piece.  Overall, a traditional L-shaped sofa is a comfortable and practical piece of furniture that can add both style and functionality to any living room. Its classic and timeless design, comfortable cushions, and ample seating space make it a popular choice for families and anyone who loves to entertain guests in their home.",
          "fr": undefined,
        },
        "key": "traditional-l-seater-sofa",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color",
              "value": {
                "de-DE": "#ebe6e1",
                "en-GB": "#ebe6e1",
                "en-US": "#ebe6e1",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Beige",
                "en-GB": "Beige",
                "en-US": "Beige",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "#2e2822",
                "en-GB": "#2e2822",
                "en-US": "#2e2822",
              },
            },
            {
              "name": "finishlabel",
              "value": {
                "de-DE": "Espresso",
                "en-GB": "Espresso",
                "en-US": "Espresso",
              },
            },
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Baumwollbezug
      - Wurfkissen um Lieferumfang enthalten
      - Selbstmontage",
                "en-GB": "- Cotton upholstery
      - Comes with accent pillows
      - Assembly on site",
                "en-US": "- Cotton upholstery
      - Comes with accent pillows
      - Assembly on site",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#F5F5DC",
                "label": {
                  "de-DE": "Beige",
                  "en-GB": "Beige",
                  "en-US": "Beige",
                },
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Traditional_L_Seater_Sofa-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Traditional_L_Seater_Sofa-1.2.jpeg",
            },
            {
              "dimensions": {
                "h": 3840,
                "w": 5760,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Traditional_L_Seater_Sofa-1.3.jpeg",
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
                "centAmount": 359900,
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
                "centAmount": 359900,
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
                "centAmount": 359900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "TLSS-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Traditionelles Ecksofa",
          "en": undefined,
          "en-GB": "Traditional L Seater Sofa",
          "en-US": "Traditional L Seater Sofa",
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
          "de-DE": "traditionelles-l-sitzer-sofa",
          "en": undefined,
          "en-GB": "traditional-l-seater-sofa",
          "en-US": "traditional-l-seater-sofa",
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

  it(`should return a traditionalLSeaterSofa preset when built for graphql`, () => {
    const traditionalLSeaterSofaPresetGraphql =
      traditionalLSeaterSofa().buildGraphql<TProductDraftGraphql>();
    expect(traditionalLSeaterSofaPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "__typename": "Reference",
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "sofas",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "furniture",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "the-traditionalist",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "collections",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A traditional L-shaped sofa is a comfortable and practical piece of furniture. The sofa is upholstered in a durable and high-quality fabric and features a classic and timeless design that can fit well with a variety of decor styles.  The sofa provides ample room for multiple people to sit comfortably. It also features a chaise lounge or a place to stretch out and relax. The L-shape design of the sofa maximizes seating space while also providing a comfortable and inviting space to relax and unwind.  The sofa features padded armrests and backrests, providing ample support and comfort for those who sit on it. The cushions are made of high-density foam, ensuring that they are comfortable and retain their shape over time. The sofa also comes with matching throw pillows, adding to the comfort and style of the piece.  Overall, a traditional L-shaped sofa is a comfortable and practical piece of furniture that can add both style and functionality to any living room. Its classic and timeless design, comfortable cushions, and ample seating space make it a popular choice for families and anyone who loves to entertain guests in their home.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Das traditionelle Ecksofa ist ein bequemes und praktisches Möbelstück. Das Sofa ist mit einem strapazierfähigen und hochwertigen Baumwollstoff bezogen und überzeugt mit einem klassischen und zeitlosen Design, das gut zu einer Vielzahl von Einrichtungsstilen passt.  Das Sofa bietet ausreichend Platz und Komfort für mehrere Personen. Es kann wie eine Chaiselongue genutzt werden und bietet einen Platz zum Ausstrecken und Entspannen. Das L-förmige Design des Sofas maximiert den Sitzplatz und bietet gleichzeitig einen komfortablen und einladenden Ort zum Entspannen und Erholen.  Das Sofa ist mit gepolsterten Armlehnen und Rückenlehnen ausgestattet, die dem Sitzenden ausreichend Halt und Komfort bieten. Die Kissen bestehen aus hochdichtem Schaumstoff, der die Form hält und das gute Sitzgefühl wahrt. Das Sofa wird darüber hinaus mit passenden Wurfkissen geliefert, die den Komfort und Stil des Sofas weiter unterstützen.  Das traditionelle L-förmiges Sofa ist ein bequemes und praktisches Möbelstück, das jedem Wohnzimmer sowohl Stil als auch Funktionalität verleiht. Sein klassisches und zeitloses Design, die bequemen Kissen und die großzügige Sitzfläche machen es zu einer beliebten Wahl für Familien und alle, die gerne Gäste in ihrem Zuhause zu empfangen.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A traditional L-shaped sofa is a comfortable and practical piece of furniture. The sofa is upholstered in a durable and high-quality fabric and features a classic and timeless design that can fit well with a variety of decor styles.  The sofa provides ample room for multiple people to sit comfortably. It also features a chaise lounge or a place to stretch out and relax. The L-shape design of the sofa maximizes seating space while also providing a comfortable and inviting space to relax and unwind.  The sofa features padded armrests and backrests, providing ample support and comfort for those who sit on it. The cushions are made of high-density foam, ensuring that they are comfortable and retain their shape over time. The sofa also comes with matching throw pillows, adding to the comfort and style of the piece.  Overall, a traditional L-shaped sofa is a comfortable and practical piece of furniture that can add both style and functionality to any living room. Its classic and timeless design, comfortable cushions, and ample seating space make it a popular choice for families and anyone who loves to entertain guests in their home.",
          },
        ],
        "key": "traditional-l-seater-sofa",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color",
              "value": "{"en-US":"#ebe6e1","en-GB":"#ebe6e1","de-DE":"#ebe6e1"}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-US":"Beige","en-GB":"Beige","de-DE":"Beige"}",
            },
            {
              "name": "finish",
              "value": "{"en-US":"#2e2822","en-GB":"#2e2822","de-DE":"#2e2822"}",
            },
            {
              "name": "finishlabel",
              "value": "{"en-US":"Espresso","en-GB":"Espresso","de-DE":"Espresso"}",
            },
            {
              "name": "productspec",
              "value": "{"en-US":"- Cotton upholstery\\n- Comes with accent pillows\\n- Assembly on site","en-GB":"- Cotton upholstery\\n- Comes with accent pillows\\n- Assembly on site","de-DE":"- Baumwollbezug\\n- Wurfkissen um Lieferumfang enthalten\\n- Selbstmontage"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Traditional_L_Seater_Sofa-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Traditional_L_Seater_Sofa-1.2.jpeg",
            },
            {
              "dimensions": {
                "height": 3840,
                "width": 5760,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Traditional_L_Seater_Sofa-1.3.jpeg",
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
                  "centAmount": 359900,
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
                  "centAmount": 359900,
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
                  "centAmount": 359900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "TLSS-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Traditional L Seater Sofa",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Traditional L Seater Sofa",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Traditionelles Ecksofa",
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
            "value": "traditional-l-seater-sofa",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "traditional-l-seater-sofa",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "traditionelles-l-sitzer-sofa",
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
