import type {
  TProductDiscountDraft,
  TProductDiscountDraftGraphql,
} from '../../../types';
import discountDresses from './discount-dresses';

describe('with the preset `discountDresses`', () => {
  it('should return a product discount draft', () => {
    const productDiscountDraft =
      discountDresses().build<TProductDiscountDraft>();

    expect(productDiscountDraft).toMatchInlineSnapshot(`
      {
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "5 EUR Off All Dresses",
          "fr": undefined,
        },
        "isActive": true,
        "key": "Dresses5EUROff",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "5 EUR Off All Dresses",
          "fr": undefined,
        },
        "predicate": "productType.key = "dresses"",
        "sortOrder": "0.7",
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "money": {
            "centAmount": 500,
            "currencyCode": "EUR",
            "fractionDigits": 2,
            "type": "centPrecision",
          },
          "type": "absolute",
        },
      }
    `);
  });

  it('should return a product discount draft when built for GraphQL', () => {
    const productDiscountDraft =
      discountDresses().buildGraphql<TProductDiscountDraftGraphql>();

    expect(productDiscountDraft).toMatchInlineSnapshot(`
      {
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "5 EUR Off All Dresses",
          },
        ],
        "isActive": true,
        "key": "Dresses5EUROff",
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "5 EUR Off All Dresses",
          },
        ],
        "predicate": "productType.key = "dresses"",
        "sortOrder": "0.7",
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "money": {
            "centAmount": 500,
            "currencyCode": "EUR",
            "fractionDigits": 2,
            "type": "centPrecision",
          },
          "type": "absolute",
        },
      }
    `);
  });
});
