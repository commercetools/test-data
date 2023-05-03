import type {
  TCartDiscountDraft,
  TCartDiscountDraftGraphql,
} from '../../../types';
import skinnyFixed from './skinny-fixed';

describe('with the preset `skinnyFixed`', () => {
  it('should return a cart discount draft', () => {
    const cartDiscountDraft = skinnyFixed().build<TCartDiscountDraft>();

    expect(cartDiscountDraft).toMatchInlineSnapshot(`
      {
        "cartPredicate": "1 = 1",
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "Save on Skinny Jeans at 25EUR per pair",
          "fr": undefined,
        },
        "isActive": true,
        "key": "SkinnyFixed25",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Save on Skinny Jeans - 25 EUR per pair",
          "fr": undefined,
        },
        "requiresDiscountCode": false,
        "sortOrder": "0.6",
        "stackingMode": "Stacking",
        "target": {
          "predicate": "product.key = "skinny_jeans"",
          "type": "lineItems",
        },
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "money": {
            "centAmount": 2500,
            "currencyCode": "EUR",
            "fractionDigits": 2,
            "type": "centPrecision",
          },
          "type": "fixed",
        },
      }
    `);
  });

  it('should return a cart discount draft when built for GraphQL', () => {
    const cartDiscountDraft =
      skinnyFixed().buildGraphql<TCartDiscountDraftGraphql>();

    expect(cartDiscountDraft).toMatchInlineSnapshot(`
      {
        "__typename": "CartDiscountDraft",
        "cartPredicate": "1 = 1",
        "custom": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Save on Skinny Jeans at 25EUR per pair",
          },
        ],
        "isActive": true,
        "key": "SkinnyFixed25",
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Save on Skinny Jeans - 25 EUR per pair",
          },
        ],
        "requiresDiscountCode": false,
        "sortOrder": "0.6",
        "stackingMode": "Stacking",
        "target": {
          "__typename": "CartDiscountTargetInput",
          "lineItems": {
            "__typename": "LineItemsTargetInput",
            "predicate": "product.key = "skinny_jeans"",
            "type": "lineItems",
          },
        },
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "__typename": "CartDiscountValueFixedDraft",
          "money": {
            "__typename": "MoneyInput",
            "centAmount": 2500,
            "currencyCode": "EUR",
            "fractionDigits": 2,
            "type": "centPrecision",
          },
          "type": "fixed",
        },
      }
    `);
  });
});
