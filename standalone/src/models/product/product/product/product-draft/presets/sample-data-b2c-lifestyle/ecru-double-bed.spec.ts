import type { TProductDraft } from '../../../types';
import ecruDoubleBed from './ecru-double-bed';
describe(`with ecruDoubleBed preset`, () => {
  it('should return a sample ecruDoubleBed product preset', () => {
    const ecruDoubleBedPreset = ecruDoubleBed().build<TProductDraft>();
    expect(ecruDoubleBedPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "beds",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Dieses Doppelbett mit gepolstertem Kopfteil ist ein einzigartiges und vielseitiges Möbelstück, das den Komfort eines Bettes mit der Funktionalität eines Sofas verbindet. Der Bettrahmen ist rechteckig und groß genug, um eine Standard-Doppelmatratze aufzunehmen. Das Kopfteil hat die Form eines Sofas, das oben am Bettrahmen befestigt ist. Das Kopfteil des Sofas bietet eine bequeme Rückenlehne zum Sitzen im Bett, um zu lesen, fernzusehen oder an einem Laptop zu arbeiten. Das Kopfteil des Sofas ist mit einem weichen und strapazierfähigen Stoff bezogen und bietet eine bequeme Sitzfläche. Insgesamt ist ein Queensize-Bett mit Sofa-Kopfteil ein praktisches und stilvolles Möbelstück, das jedem Schlafzimmer sowohl Komfort als auch Funktionalität verleiht.",
          "en": undefined,
          "en-GB": "A double-sized bed with a sofa headboard is a unique and versatile piece of furniture that combines the comfort of a bed with the functionality of a sofa. The bed frame is rectangular and large enough to accommodate a standard double mattress. The headboard is in the form of a sofa, which is attached to the top of the bed frame. The sofa headboard provides a comfortable backrest for sitting up in bed to read, watch TV, or work on a laptop. The sofa headboard is upholstered in a soft and durable fabric, providing a comfortable seating surface. Overall, a queen bed with a sofa headboard is a practical and stylish piece of furniture that can add both comfort and functionality to any bedroom.",
          "en-US": "A double-sized bed with a sofa headboard is a unique and versatile piece of furniture that combines the comfort of a bed with the functionality of a sofa. The bed frame is rectangular and large enough to accommodate a standard double mattress. The headboard is in the form of a sofa, which is attached to the top of the bed frame. The sofa headboard provides a comfortable backrest for sitting up in bed to read, watch TV, or work on a laptop. The sofa headboard is upholstered in a soft and durable fabric, providing a comfortable seating surface. Overall, a queen bed with a sofa headboard is a practical and stylish piece of furniture that can add both comfort and functionality to any bedroom.",
          "fr": undefined,
        },
        "key": "ecru-double-bed",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Mit gepolstertem Kopfteil
      - Montage inklusive",
                "en-GB": "- Comes with pillow-top headboard
      - Assembly included",
                "en-US": "- Comes with pillow-top headboard
      - Assembly included",
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
                "h": 2000,
                "w": 2000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ecru_Double_Bed-1.1.jpeg",
            },
          ],
          "key": "ecruDoubleBed01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "89900EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 89900,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "89900GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 89900,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "89900USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 89900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "SQB-034",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Doppelbett "Ecru"",
          "en": undefined,
          "en-GB": "Ecru Double Bed",
          "en-US": "Ecru Double Bed",
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
          "de-DE": "ecru-doppelbett",
          "en": undefined,
          "en-GB": "ecru-double-bed",
          "en-US": "ecru-double-bed",
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
});
