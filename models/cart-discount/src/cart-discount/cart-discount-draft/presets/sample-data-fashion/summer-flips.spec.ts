import type {
  TCartDiscountDraft,
  TCartDiscountDraftGraphql,
} from '../../../types';
import summerFlips from './summer-flips';

describe('with the preset `summerFlips`', () => {
  it('should return a cart discount draft', () => {
    const cartDiscountDraft = summerFlips().build<TCartDiscountDraft>();

    expect(cartDiscountDraft).toMatchInlineSnapshot(`
      {
        "cartPredicate": "lineItemExists(product.key = "summer_dress") = true",
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "Purchase the Summer Dress and get a free pair of flip flops",
          "fr": undefined,
        },
        "isActive": true,
        "key": "GWPSummerFlips",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Summer special - get a free pair of flip flops with the Summer Dress",
          "fr": undefined,
        },
        "requiresDiscountCode": false,
        "sortOrder": "0.888",
        "stackingMode": "Stacking",
        "target": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "distributionChannel": undefined,
          "product": {
            "key": "summer_dress",
            "typeId": "product",
          },
          "supplyChannel": undefined,
          "type": "giftLineItem",
          "variantId": 1,
        },
      }
    `);
  });

  it('should return a cart discount draft when built for GraphQL', () => {
    const cartDiscountDraft =
      summerFlips().buildGraphql<TCartDiscountDraftGraphql>();

    expect(cartDiscountDraft).toMatchInlineSnapshot(`
      {
        "cartPredicate": "lineItemExists(product.key = "summer_dress") = true",
        "custom": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Purchase the Summer Dress and get a free pair of flip flops",
          },
        ],
        "isActive": true,
        "key": "GWPSummerFlips",
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Summer special - get a free pair of flip flops with the Summer Dress",
          },
        ],
        "requiresDiscountCode": false,
        "sortOrder": "0.888",
        "stackingMode": "Stacking",
        "target": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "giftLineItem": {
            "distributionChannel": undefined,
            "product": {
              "__typename": "Reference",
              "key": "summer_dress",
              "typeId": "product",
            },
            "supplyChannel": undefined,
            "variantId": 1,
          },
        },
      }
    `);
  });
});
