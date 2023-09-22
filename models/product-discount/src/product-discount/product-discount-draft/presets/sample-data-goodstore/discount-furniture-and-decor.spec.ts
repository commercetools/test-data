import type {
  TProductDiscountDraft,
  TProductDiscountDraftGraphql,
} from '../../../types';
import discountFurnitureAndDecor from './discount-furniture-and-decor';

describe('with the preset `discountFurnitureAndDecor`', () => {
  it('should return a product discount draft', () => {
    const productDiscountDraft =
      discountFurnitureAndDecor().build<TProductDiscountDraft>();

    expect(productDiscountDraft).toMatchInlineSnapshot(`
      {
        "description": {
          "de": undefined,
          "en": undefined,
          "en-GB": "10 USD Off All Furniture & Decor",
          "en-US": "10 USD Off All Furniture & Decor",
          "fr": undefined,
        },
        "isActive": true,
        "key": "FurnitureDecor10USDOff",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-GB": "10 USD Off All Furniture & Decor",
          "en-US": "10 USD Off All Furniture & Decor",
          "fr": undefined,
        },
        "predicate": "productType.key = "furniture-and-decor"",
        "sortOrder": "0.2",
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "money": [
            {
              "centAmount": 1000,
              "currencyCode": "USD",
            },
          ],
          "type": "absolute",
        },
      }
    `);
  });

  it('should return a product discount draft when built for GraphQL', () => {
    const productDiscountDraft =
      discountFurnitureAndDecor().buildGraphql<TProductDiscountDraftGraphql>();

    expect(productDiscountDraft).toMatchInlineSnapshot(`
      {
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "10 USD Off All Furniture & Decor",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "10 USD Off All Furniture & Decor",
          },
        ],
        "isActive": true,
        "key": "FurnitureDecor10USDOff",
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "10 USD Off All Furniture & Decor",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "10 USD Off All Furniture & Decor",
          },
        ],
        "predicate": "productType.key = "furniture-and-decor"",
        "sortOrder": "0.2",
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "absolute": {
            "money": [
              {
                "centAmount": 1000,
                "currencyCode": "USD",
              },
            ],
          },
        },
      }
    `);
  });
});
