import type {
  TCartDiscountDraft,
  TCartDiscountDraftGraphql,
} from '../../../types';
import luxeSpend from './luxe-spend';

describe('with the preset `luxeSpend`', () => {
  it('should return a cart discount draft', () => {
    const cartDiscountDraft = luxeSpend().build<TCartDiscountDraft>();

    expect(cartDiscountDraft).toMatchInlineSnapshot(`
      {
        "cartPredicate": "totalPrice = "500.00 EUR" and customer.customerGroup.key = "luxe"",
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "Luxe customers - Get 30 EUR back when you spend 500EUR",
          "fr": undefined,
        },
        "isActive": true,
        "key": "LuxeSpend500Save30",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Luxe customers! Spend 500EUR and Save 30EUR",
          "fr": undefined,
        },
        "requiresDiscountCode": false,
        "sortOrder": "0.876899",
        "stackingMode": "Stacking",
        "target": {
          "predicate": "1=1",
          "type": "lineItems",
        },
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "money": [
            {
              "centAmount": 3000,
              "currencyCode": "EUR",
            },
          ],
          "type": "absolute",
        },
      }
    `);
  });

  it('should return a cart discount draft when built for GraphQL', () => {
    const cartDiscountDraft =
      luxeSpend().buildGraphql<TCartDiscountDraftGraphql>();

    expect(cartDiscountDraft).toMatchInlineSnapshot(`
      {
        "cartPredicate": "totalPrice = "500.00 EUR" and customer.customerGroup.key = "luxe"",
        "custom": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Luxe customers - Get 30 EUR back when you spend 500EUR",
          },
        ],
        "isActive": true,
        "key": "LuxeSpend500Save30",
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Luxe customers! Spend 500EUR and Save 30EUR",
          },
        ],
        "requiresDiscountCode": false,
        "sortOrder": "0.876899",
        "stackingMode": "Stacking",
        "target": {
          "lineItems": {
            "predicate": "1=1",
          },
        },
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "absolute": {
            "money": [
              {
                "centAmount": 3000,
                "currencyCode": "EUR",
              },
            ],
          },
        },
      }
    `);
  });
});
