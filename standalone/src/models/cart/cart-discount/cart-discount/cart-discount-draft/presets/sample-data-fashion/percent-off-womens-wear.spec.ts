import type {
  TCartDiscountDraft,
  TCartDiscountDraftGraphql,
} from '../../../types';
import percentOffWomensWear from './percent-off-womens-wear';

describe('with the preset `percentOffWomensWear`', () => {
  it('should return a cart discount draft', () => {
    const cartDiscountDraft =
      percentOffWomensWear().build<TCartDiscountDraft>();

    expect(cartDiscountDraft).toMatchInlineSnapshot(`
      {
        "cartPredicate": "1 = 1",
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "Take 15% off any full priced item from our Women's category",
          "fr": undefined,
        },
        "isActive": true,
        "key": "15pctOffWomensRegPrice",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "15% off all regular priced Women's wear",
          "fr": undefined,
        },
        "requiresDiscountCode": false,
        "sortOrder": "0.3445",
        "stackingMode": "Stacking",
        "target": {
          "predicate": "categories.key contains "bottoms-women" and price.discount.id is not defined",
          "type": "lineItems",
        },
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "permyriad": 1500,
          "type": "relative",
        },
      }
    `);
  });

  it('should return a cart discount draft when built for GraphQL', () => {
    const cartDiscountDraft =
      percentOffWomensWear().buildGraphql<TCartDiscountDraftGraphql>();

    expect(cartDiscountDraft).toMatchInlineSnapshot(`
      {
        "cartPredicate": "1 = 1",
        "custom": undefined,
        "description": [
          {
            "locale": "en-US",
            "value": "Take 15% off any full priced item from our Women's category",
          },
        ],
        "isActive": true,
        "key": "15pctOffWomensRegPrice",
        "name": [
          {
            "locale": "en-US",
            "value": "15% off all regular priced Women's wear",
          },
        ],
        "requiresDiscountCode": false,
        "sortOrder": "0.3445",
        "stackingMode": "Stacking",
        "target": {
          "lineItems": {
            "predicate": "categories.key contains "bottoms-women" and price.discount.id is not defined",
          },
        },
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "relative": {
            "permyriad": 1500,
          },
        },
      }
    `);
  });
});
