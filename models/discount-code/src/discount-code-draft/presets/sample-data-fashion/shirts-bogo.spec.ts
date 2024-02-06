import { TDiscountCodeDraftGraphql, TDiscountCodeDraft } from '../../../types';
import shirtsBogo from './shirts-bogo';

describe('with the preset `employeeSale`', () => {
  it('should return a discount code draft', () => {
    const discountCodeDraft = shirtsBogo(
      'my-cart-discount-id'
    ).build<TDiscountCodeDraft>();

    expect(discountCodeDraft).toMatchInlineSnapshot(`
      {
        "cartDiscounts": [
          {
            "id": "my-cart-discount-id",
            "typeId": "cart-discount",
          },
        ],
        "cartPredicate": undefined,
        "code": "BOGO",
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "fr": undefined,
        },
        "groups": [],
        "isActive": true,
        "maxApplications": 1,
        "maxApplicationsPerCustomer": 1,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "BOGO",
          "fr": undefined,
        },
        "validFrom": undefined,
        "validUntil": undefined,
      }
    `);
  });

  it('should return a discount code draft when built for GraphQL', () => {
    const discountCodeDraft = shirtsBogo(
      'my-cart-discount-id'
    ).buildGraphql<TDiscountCodeDraftGraphql>();

    expect(discountCodeDraft).toMatchInlineSnapshot(`
      {
        "cartDiscounts": [
          {
            "id": "my-cart-discount-id",
            "typeId": "cart-discount",
          },
        ],
        "cartPredicate": undefined,
        "code": "BOGO",
        "custom": undefined,
        "description": [],
        "groups": [],
        "isActive": true,
        "maxApplications": 1,
        "maxApplicationsPerCustomer": 1,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "BOGO",
          },
        ],
        "validFrom": undefined,
        "validUntil": undefined,
      }
    `);
  });
});
