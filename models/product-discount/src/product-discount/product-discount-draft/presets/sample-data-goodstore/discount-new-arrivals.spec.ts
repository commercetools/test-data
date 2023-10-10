import type {
  TProductDiscountDraft,
  TProductDiscountDraftGraphql,
} from '../../../types';
import discountNewArrivals from './discount-new-arrivals';

describe('with the preset `discountNewArrivals`', () => {
  it('should return a product discount draft', () => {
    const productDiscountDraft =
      discountNewArrivals().build<TProductDiscountDraft>();

    expect(productDiscountDraft).toMatchInlineSnapshot(`
      {
        "description": {
          "de": undefined,
          "en": undefined,
          "en-GB": "15% Off All New Arrivals",
          "en-US": "15% Off All New Arrivals",
          "fr": undefined,
        },
        "isActive": true,
        "key": "NewArrivals15pctOff",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-GB": "15% Off All New Arrivals",
          "en-US": "15% Off All New Arrivals",
          "fr": undefined,
        },
        "predicate": "categories.key contains "new-arrivals"",
        "sortOrder": "0.67",
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "permyriad": 1500,
          "type": "relative",
        },
      }
    `);
  });

  it('should return a product discount draft when built for GraphQL', () => {
    const productDiscountDraft =
      discountNewArrivals().buildGraphql<TProductDiscountDraftGraphql>();

    expect(productDiscountDraft).toMatchInlineSnapshot(`
      {
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "15% Off All New Arrivals",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "15% Off All New Arrivals",
          },
        ],
        "isActive": true,
        "key": "NewArrivals15pctOff",
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "15% Off All New Arrivals",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "15% Off All New Arrivals",
          },
        ],
        "predicate": "categories.key contains "new-arrivals"",
        "sortOrder": "0.67",
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
