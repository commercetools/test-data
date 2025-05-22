import type {
  TProductDiscountDraft,
  TProductDiscountDraftGraphql,
} from '../../../types';
import discountKids from './discount-kids';

describe('with the preset `discountKids`', () => {
  it('should return a product discount draft', () => {
    const productDiscountDraft = discountKids().build<TProductDiscountDraft>();

    expect(productDiscountDraft).toMatchInlineSnapshot(`
      {
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "Enjoy 20% off all items in our Kids selection",
          "fr": undefined,
        },
        "isActive": true,
        "key": "Kids20pctOff",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Back to School - 20% off all items in our Kids category",
          "fr": undefined,
        },
        "predicate": "categories.key contains "kids"",
        "sortOrder": "0.66678",
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "permyriad": 2000,
          "type": "relative",
        },
      }
    `);
  });

  it('should return a product discount draft when built for GraphQL', () => {
    const productDiscountDraft =
      discountKids().buildGraphql<TProductDiscountDraftGraphql>();

    expect(productDiscountDraft).toMatchInlineSnapshot(`
      {
        "description": [
          {
            "locale": "en-US",
            "value": "Enjoy 20% off all items in our Kids selection",
          },
        ],
        "isActive": true,
        "key": "Kids20pctOff",
        "name": [
          {
            "locale": "en-US",
            "value": "Back to School - 20% off all items in our Kids category",
          },
        ],
        "predicate": "categories.key contains "kids"",
        "sortOrder": "0.66678",
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "relative": {
            "permyriad": 2000,
          },
        },
      }
    `);
  });
});
