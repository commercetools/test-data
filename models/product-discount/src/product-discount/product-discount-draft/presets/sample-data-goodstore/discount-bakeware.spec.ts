import type {
  TProductDiscountDraft,
  TProductDiscountDraftGraphql,
} from '../../../types';
import discountBakeware from './discount-bakeware';

describe('with the preset `discountBakeware`', () => {
  it('should return a product discount draft', () => {
    const productDiscountDraft =
      discountBakeware().build<TProductDiscountDraft>();

    expect(productDiscountDraft).toMatchInlineSnapshot(`
      {
        "description": {
          "de": undefined,
          "en": undefined,
          "en-GB": "5 EUR Off All Bakeware Items",
          "en-US": "5 EUR Off All Bakeware Items",
          "fr": undefined,
        },
        "isActive": false,
        "key": "Bakeware5EUROff",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-GB": "5 EUR Off All Bakeware Items",
          "en-US": "5 EUR Off All Bakeware Items",
          "fr": undefined,
        },
        "predicate": "categories.key contains "bakeware"",
        "sortOrder": "0.5",
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "money": [
            {
              "centAmount": 500,
              "currencyCode": "EUR",
            },
          ],
          "type": "absolute",
        },
      }
    `);
  });

  it('should return a product discount draft when built for GraphQL', () => {
    const productDiscountDraft =
      discountBakeware().buildGraphql<TProductDiscountDraftGraphql>();

    expect(productDiscountDraft).toMatchInlineSnapshot(`
      {
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "5 EUR Off All Bakeware Items",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "5 EUR Off All Bakeware Items",
          },
        ],
        "isActive": false,
        "key": "Bakeware5EUROff",
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "5 EUR Off All Bakeware Items",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "5 EUR Off All Bakeware Items",
          },
        ],
        "predicate": "categories.key contains "bakeware"",
        "sortOrder": "0.5",
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "absolute": {
            "money": [
              {
                "centAmount": 500,
                "currencyCode": "EUR",
              },
            ],
          },
        },
      }
    `);
  });
});
