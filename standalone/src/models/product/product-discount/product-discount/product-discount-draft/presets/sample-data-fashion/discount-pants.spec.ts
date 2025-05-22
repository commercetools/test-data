import type {
  TProductDiscountDraft,
  TProductDiscountDraftGraphql,
} from '../../../types';
import discountPants from './discount-pants';

describe('with the preset `discountPants`', () => {
  it('should return a product discount draft', () => {
    const productDiscountDraft = discountPants().build<TProductDiscountDraft>();

    expect(productDiscountDraft).toMatchInlineSnapshot(`
      {
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "10% Off All Pants",
          "fr": undefined,
        },
        "isActive": true,
        "key": "10pctOffAllPants",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "10% Off All Pants",
          "fr": undefined,
        },
        "predicate": "productType.key = "pants"",
        "sortOrder": "0.4",
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "permyriad": 1000,
          "type": "relative",
        },
      }
    `);
  });

  it('should return a product discount draft when built for GraphQL', () => {
    const productDiscountDraft =
      discountPants().buildGraphql<TProductDiscountDraftGraphql>();

    expect(productDiscountDraft).toMatchInlineSnapshot(`
      {
        "description": [
          {
            "locale": "en-US",
            "value": "10% Off All Pants",
          },
        ],
        "isActive": true,
        "key": "10pctOffAllPants",
        "name": [
          {
            "locale": "en-US",
            "value": "10% Off All Pants",
          },
        ],
        "predicate": "productType.key = "pants"",
        "sortOrder": "0.4",
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "relative": {
            "permyriad": 1000,
          },
        },
      }
    `);
  });
});
