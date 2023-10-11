import type {
  TProductDiscountDraft,
  TProductDiscountDraftGraphql,
} from '../../../types';
import discountArmchairs from './discount-armchairs';

describe('with the preset `discountArmchairs`', () => {
  it('should return a product discount draft', () => {
    const productDiscountDraft =
      discountArmchairs().build<TProductDiscountDraft>();

    expect(productDiscountDraft).toMatchInlineSnapshot(`
      {
        "description": {
          "de": undefined,
          "en": undefined,
          "en-GB": "15% Off All Armchairs",
          "en-US": "15% Off All Armchairs",
          "fr": undefined,
        },
        "isActive": true,
        "key": "NewArrivals15pctOff",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-GB": "15% Off All Armchairs",
          "en-US": "15% Off All Armchairs",
          "fr": undefined,
        },
        "predicate": "categories.key contains "armchairs"",
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
      discountArmchairs().buildGraphql<TProductDiscountDraftGraphql>();

    expect(productDiscountDraft).toMatchInlineSnapshot(`
      {
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "15% Off All Armchairs",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "15% Off All Armchairs",
          },
        ],
        "isActive": true,
        "key": "NewArrivals15pctOff",
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "15% Off All Armchairs",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "15% Off All Armchairs",
          },
        ],
        "predicate": "categories.key contains "armchairs"",
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
