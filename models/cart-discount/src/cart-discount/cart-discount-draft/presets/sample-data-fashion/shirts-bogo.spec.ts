import type {
  TCartDiscountDraft,
  TCartDiscountDraftGraphql,
} from '../../../types';
import shirtsBogo from './shirts-bogo';

describe('with the preset `shirtsBogo`', () => {
  it('should return a cart discount draft', () => {
    const cartDiscountDraft = shirtsBogo().build<TCartDiscountDraft>();

    expect(cartDiscountDraft).toMatchInlineSnapshot(`
      {
        "cartPredicate": "1 = 1",
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "Two for one on all Shirts (discount on the cheapest item)",
          "fr": undefined,
        },
        "isActive": true,
        "key": "ShirtsBOGO",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Buy One Shirt and Get Second Free",
          "fr": undefined,
        },
        "requiresDiscountCode": true,
        "sortOrder": "0.2",
        "stackingMode": "Stacking",
        "target": {
          "discountedQuantity": 1,
          "maxOccurrence": undefined,
          "predicate": "productType.key = "shirts"",
          "selectionMode": "Cheapest",
          "triggerQuantity": 2,
          "type": "multiBuyLineItems",
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
      shirtsBogo().buildGraphql<TCartDiscountDraftGraphql>();

    expect(cartDiscountDraft).toMatchInlineSnapshot(`
      {
        "cartPredicate": "1 = 1",
        "custom": undefined,
        "description": [
          {
            "locale": "en-US",
            "value": "Two for one on all Shirts (discount on the cheapest item)",
          },
        ],
        "isActive": true,
        "key": "ShirtsBOGO",
        "name": [
          {
            "locale": "en-US",
            "value": "Buy One Shirt and Get Second Free",
          },
        ],
        "requiresDiscountCode": true,
        "sortOrder": "0.2",
        "stackingMode": "Stacking",
        "target": {
          "multiBuyLineItems": {
            "discountedQuantity": 1,
            "maxOccurrence": undefined,
            "predicate": "productType.key = "shirts"",
            "selectionMode": "Cheapest",
            "triggerQuantity": 2,
          },
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
