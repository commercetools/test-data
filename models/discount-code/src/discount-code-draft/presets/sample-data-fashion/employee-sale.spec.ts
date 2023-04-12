import { TDiscountCodeDraftGraphql, TDiscountCodeDraft } from '../../../types';
import employeeSale from './employee-sale';

describe('with the preset `employeeSale`', () => {
  it('should return a discount code draft', () => {
    const discountCodeDraft = employeeSale().build<TDiscountCodeDraft>();

    expect(discountCodeDraft.code).toMatchInlineSnapshot(`"emp15"`);
    expect(discountCodeDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Employee Sale",
        "fr": undefined,
      }
    `);
    expect(discountCodeDraft.description).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "fr": undefined,
      }
    `);
    expect(discountCodeDraft.cartDiscounts[0].key).toMatchInlineSnapshot(
      `"EmployeeSale"`
    );
    expect(discountCodeDraft.cartDiscounts[0].typeId).toMatchInlineSnapshot(
      `"cart-discount"`
    );
    expect(discountCodeDraft.isActive).toMatchInlineSnapshot(`true`);
    expect(discountCodeDraft.groups).toMatchInlineSnapshot(`[]`);
  });

  it('should return a discount code draft when built for GraphQL', () => {
    const discountCodeDraft =
      employeeSale().buildGraphql<TDiscountCodeDraftGraphql>();

    expect(discountCodeDraft.code).toMatchInlineSnapshot(`"emp15"`);
    expect(discountCodeDraft.name).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Employee Sale",
        },
      ]
    `);
    expect(discountCodeDraft.description).toMatchInlineSnapshot(`[]`);
    expect(discountCodeDraft.cartDiscounts[0].key).toMatchInlineSnapshot(
      `"EmployeeSale"`
    );
    expect(discountCodeDraft.cartDiscounts[0].typeId).toMatchInlineSnapshot(
      `"cart-discount"`
    );
    expect(discountCodeDraft.isActive).toMatchInlineSnapshot(`true`);
    expect(discountCodeDraft.groups).toMatchInlineSnapshot(`[]`);
    expect(discountCodeDraft.__typename).toMatchInlineSnapshot(
      `"DiscountCodeDraft"`
    );
  });
});
