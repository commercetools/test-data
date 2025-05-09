import type {
  TCartDiscountDraft,
  TCartDiscountDraftGraphql,
} from '../../../types';
import employeeSale from './employee-sale';

describe('with the preset `employeeSale`', () => {
  it('should return a cart discount draft', () => {
    const cartDiscountDraft = employeeSale().build<TCartDiscountDraft>();

    expect(cartDiscountDraft).toMatchInlineSnapshot(`
      {
        "cartPredicate": "customer.customerGroup.key = "employee"",
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "employee_sale",
          "fr": undefined,
        },
        "isActive": true,
        "key": "EmployeeSale",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Employee Sale",
          "fr": undefined,
        },
        "requiresDiscountCode": true,
        "sortOrder": "0.8",
        "stackingMode": "Stacking",
        "target": {
          "predicate": "1=1",
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
      employeeSale().buildGraphql<TCartDiscountDraftGraphql>();

    expect(cartDiscountDraft).toMatchInlineSnapshot(`
      {
        "cartPredicate": "customer.customerGroup.key = "employee"",
        "custom": undefined,
        "description": [
          {
            "locale": "en-US",
            "value": "employee_sale",
          },
        ],
        "isActive": true,
        "key": "EmployeeSale",
        "name": [
          {
            "locale": "en-US",
            "value": "Employee Sale",
          },
        ],
        "requiresDiscountCode": true,
        "sortOrder": "0.8",
        "stackingMode": "Stacking",
        "target": {
          "lineItems": {
            "predicate": "1=1",
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
