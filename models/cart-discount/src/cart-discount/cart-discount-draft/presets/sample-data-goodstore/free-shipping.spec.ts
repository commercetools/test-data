import type {
  TCartDiscountDraft,
  TCartDiscountDraftGraphql,
} from '../../../types';
import freeShipping from './free-shipping';

describe('with the preset `freeShipping`', () => {
  it('should return a cart discount draft', () => {
    const cartDiscountDraft = freeShipping().build<TCartDiscountDraft>();

    expect(cartDiscountDraft).toMatchInlineSnapshot(`
      {
        "cartPredicate": "totalPrice >= "100 GBP"",
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-GB": "Free shipping when your order is at least 100 GBP",
          "en-US": "Free shipping when your order is at least 100 GBP",
          "fr": undefined,
        },
        "isActive": true,
        "key": "FreeShip100",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-GB": "Free Shipping when you spend 100 GBP",
          "en-US": "Free Shipping when you spend 100 GBP",
          "fr": undefined,
        },
        "requiresDiscountCode": false,
        "sortOrder": "0.22",
        "stackingMode": "Stacking",
        "target": {
          "type": "shipping",
        },
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "permyriad": 10000,
          "type": "relative",
        },
      }
    `);
  });

  it('should return a cart discount draft when built for GraphQL', () => {
    const cartDiscountDraft =
      freeShipping().buildGraphql<TCartDiscountDraftGraphql>();

    expect(cartDiscountDraft).toMatchInlineSnapshot(`
      {
        "cartPredicate": "totalPrice >= "100 GBP"",
        "custom": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Free shipping when your order is at least 100 GBP",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Free shipping when your order is at least 100 GBP",
          },
        ],
        "isActive": true,
        "key": "FreeShip100",
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Free Shipping when you spend 100 GBP",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Free Shipping when you spend 100 GBP",
          },
        ],
        "requiresDiscountCode": false,
        "sortOrder": "0.22",
        "stackingMode": "Stacking",
        "target": {
          "shipping": {},
        },
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "relative": {
            "permyriad": 10000,
          },
        },
      }
    `);
  });
});
