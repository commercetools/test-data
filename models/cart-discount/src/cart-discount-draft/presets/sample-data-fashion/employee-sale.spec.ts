import { TCartDiscountDraft, TCartDiscountDraftGraphql } from '../../../types';
import employeeSale from './employee-sale';

describe('with the preset `employeeSale`', () => {
  it('should return a cart discount draft', () => {
    const cartDiscountDraft = employeeSale().build<TCartDiscountDraft>();

    expect(cartDiscountDraft.value).toMatchInlineSnapshot(`
      {
        "permyriad": 1500,
        "type": "relative",
      }
    `);
    expect(cartDiscountDraft.cartPredicate).toMatchInlineSnapshot(
      `"customer.customerGroup.key = "employee""`
    );
    expect(cartDiscountDraft.target).toMatchInlineSnapshot(`undefined`);
    expect(cartDiscountDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Employee Sale",
        "fr": undefined,
      }
    `);
    expect(cartDiscountDraft.description).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "employee_sale",
        "fr": undefined,
      }
    `);
    expect(cartDiscountDraft.stackingMode).toMatchInlineSnapshot(`"Stacking"`);
    expect(cartDiscountDraft.isActive).toMatchInlineSnapshot(`true`);
    expect(cartDiscountDraft.requiresDiscountCode).toMatchInlineSnapshot(
      `true`
    );
    expect(cartDiscountDraft.sortOrder).toMatchInlineSnapshot(`"0.8"`);
    expect(cartDiscountDraft.key).toMatchInlineSnapshot(`"EmployeeSale"`);
  });

  it('should return a cart discount draft when built for GraphQL', () => {
    const cartDiscountDraft =
      employeeSale().buildGraphql<TCartDiscountDraftGraphql>();

    expect(cartDiscountDraft.value).toMatchInlineSnapshot(`
      {
        "__typename": "CartDiscountValueRelative",
        "permyriad": 1500,
        "type": "relative",
      }
    `);
    expect(cartDiscountDraft.cartPredicate).toMatchInlineSnapshot(
      `"customer.customerGroup.key = "employee""`
    );
    expect(cartDiscountDraft.target).toMatchInlineSnapshot(`undefined`);
    expect(cartDiscountDraft.name).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Employee Sale",
        },
      ]
    `);
    expect(cartDiscountDraft.description).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "employee_sale",
        },
      ]
    `);
    expect(cartDiscountDraft.stackingMode).toMatchInlineSnapshot(`"Stacking"`);
    expect(cartDiscountDraft.isActive).toMatchInlineSnapshot(`true`);
    expect(cartDiscountDraft.requiresDiscountCode).toMatchInlineSnapshot(
      `true`
    );
    expect(cartDiscountDraft.sortOrder).toMatchInlineSnapshot(`"0.8"`);
    expect(cartDiscountDraft.key).toMatchInlineSnapshot(`"EmployeeSale"`);
    expect(cartDiscountDraft.__typename).toMatchInlineSnapshot(
      `"CartDiscountDraft"`
    );
  });
});
