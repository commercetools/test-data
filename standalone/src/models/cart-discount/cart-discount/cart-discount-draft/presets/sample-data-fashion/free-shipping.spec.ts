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
        "cartPredicate": "totalPrice >= "100 EUR"",
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "Free shipping when your order is at least 100 EUR",
          "fr": undefined,
        },
        "isActive": true,
        "key": "FreeShip100",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Free Shipping when you spend 100EUR",
          "fr": undefined,
        },
        "requiresDiscountCode": false,
        "sortOrder": "0.222",
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
        "cartPredicate": "totalPrice >= "100 EUR"",
        "custom": undefined,
        "description": [
          {
            "locale": "en-US",
            "value": "Free shipping when your order is at least 100 EUR",
          },
        ],
        "isActive": true,
        "key": "FreeShip100",
        "name": [
          {
            "locale": "en-US",
            "value": "Free Shipping when you spend 100EUR",
          },
        ],
        "requiresDiscountCode": false,
        "sortOrder": "0.222",
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
