import type {
  TCartDiscountDraft,
  TCartDiscountDraftGraphql,
} from '../../../types';
import spendSaveTenPercent from './spend-save-ten-percent';

describe('with the preset `spendSaveTenPercent`', () => {
  it('should return a cart discount draft', () => {
    const cartDiscountDraft = spendSaveTenPercent().build<TCartDiscountDraft>();

    expect(cartDiscountDraft).toMatchInlineSnapshot(`
      {
        "cartPredicate": "totalPrice = "100.00 EUR"",
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "Save 10% when you spend 100EUR",
          "fr": undefined,
        },
        "isActive": true,
        "key": "Spend100EURSave10pct",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Save 10% when you spend 100EUR",
          "fr": undefined,
        },
        "requiresDiscountCode": false,
        "sortOrder": "0.897987087",
        "stackingMode": "Stacking",
        "target": {
          "predicate": "1=1",
          "type": "lineItems",
        },
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "permyriad": 1000,
          "type": "relative",
        },
      }
    `);
  });

  it('should return a cart discount draft when built for GraphQL', () => {
    const cartDiscountDraft =
      spendSaveTenPercent().buildGraphql<TCartDiscountDraftGraphql>();

    expect(cartDiscountDraft).toMatchInlineSnapshot(`
      {
        "cartPredicate": "totalPrice = "100.00 EUR"",
        "custom": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Save 10% when you spend 100EUR",
          },
        ],
        "isActive": true,
        "key": "Spend100EURSave10pct",
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Save 10% when you spend 100EUR",
          },
        ],
        "requiresDiscountCode": false,
        "sortOrder": "0.897987087",
        "stackingMode": "Stacking",
        "target": {
          "lineItems": {
            "predicate": "1=1",
            "type": "lineItems",
          },
        },
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "permyriad": 1000,
          "type": "relative",
        },
      }
    `);
  });
});
