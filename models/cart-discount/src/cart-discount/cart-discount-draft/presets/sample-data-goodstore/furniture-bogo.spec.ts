import type {
  TCartDiscountDraft,
  TCartDiscountDraftGraphql,
} from '../../../types';
import furnitureBogo from './furniture-bogo';

describe('with the preset `furnitureBogo`', () => {
  it('should return a cart discount draft', () => {
    const cartDiscountDraft = furnitureBogo().build<TCartDiscountDraft>();

    expect(cartDiscountDraft).toMatchInlineSnapshot(`
      {
        "cartPredicate": "1 = 1",
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-GB": "Two for one on all furniture items (discount on the cheapest item)",
          "en-US": "Two for one on all furniture items (discount on the cheapest item)",
          "fr": undefined,
        },
        "isActive": false,
        "key": "FurnitureBOGO",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-GB": "Buy One Item of Furniture and Receive the Second for Free",
          "en-US": "Buy One Item of Furniture and Receive the Second for Free",
          "fr": undefined,
        },
        "requiresDiscountCode": true,
        "sortOrder": "0.15",
        "stackingMode": "Stacking",
        "target": {
          "discountedQuantity": 1,
          "maxOccurrence": undefined,
          "predicate": "productType.key = "furniture-and-decor"",
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
      furnitureBogo().buildGraphql<TCartDiscountDraftGraphql>();

    expect(cartDiscountDraft).toMatchInlineSnapshot(`
      {
        "cartPredicate": "1 = 1",
        "custom": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Two for one on all furniture items (discount on the cheapest item)",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Two for one on all furniture items (discount on the cheapest item)",
          },
        ],
        "isActive": false,
        "key": "FurnitureBOGO",
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Buy One Item of Furniture and Receive the Second for Free",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Buy One Item of Furniture and Receive the Second for Free",
          },
        ],
        "requiresDiscountCode": true,
        "sortOrder": "0.15",
        "stackingMode": "Stacking",
        "target": {
          "multiBuyLineItems": {
            "discountedQuantity": 1,
            "maxOccurrence": undefined,
            "predicate": "productType.key = "furniture-and-decor"",
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
