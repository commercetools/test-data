import { TCartDiscountDraft, TCartDiscountDraftGraphql } from '../../../types';
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
        "target": undefined,
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
        "__typename": "CartDiscountDraft",
        "cartPredicate": "1 = 1",
        "custom": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Two for one on all Shirts (discount on the cheapest item)",
          },
        ],
        "isActive": true,
        "key": "ShirtsBOGO",
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Buy One Shirt and Get Second Free",
          },
        ],
        "requiresDiscountCode": true,
        "sortOrder": "0.2",
        "stackingMode": "Stacking",
        "target": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "__typename": "CartDiscountValueRelativeDraft",
          "permyriad": 10000,
          "type": "relative",
        },
      }
    `);
  });
});
