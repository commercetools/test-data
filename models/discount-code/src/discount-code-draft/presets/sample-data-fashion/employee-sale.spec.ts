import type { TDiscountCodeDraftGraphql, TDiscountCodeDraft } from '../../../types';
import employeeSale from './employee-sale';

describe('with the preset `employeeSale`', () => {
  it('should return a discount code draft', () => {
    const discountCodeDraft = employeeSale(
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
        "code": "emp15",
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "fr": undefined,
        },
        "groups": [],
        "isActive": true,
        "key": undefined,
        "maxApplications": undefined,
        "maxApplicationsPerCustomer": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Employee Sale",
          "fr": undefined,
        },
        "validFrom": undefined,
        "validUntil": undefined,
      }
    `);
  });

  it('should return a discount code draft when built for GraphQL', () => {
    const discountCodeDraft = employeeSale(
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
        "code": "emp15",
        "custom": undefined,
        "description": [],
        "groups": [],
        "isActive": true,
        "key": undefined,
        "maxApplications": undefined,
        "maxApplicationsPerCustomer": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Employee Sale",
          },
        ],
        "validFrom": undefined,
        "validUntil": undefined,
      }
    `);
  });
});
