import { TDiscountCodeDraftGraphql, TDiscountCodeDraft } from '../../../types';
import shirtsBogo from './shirts-bogo';

describe('with the preset `employeeSale`', () => {
  it('should return a discount code draft', () => {
    const discountCodeDraft = shirtsBogo().build<TDiscountCodeDraft>();

    expect(discountCodeDraft.code).toMatchInlineSnapshot(`"BOGO"`);
    expect(discountCodeDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "BOGO",
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
      `"ShirtsBOGO"`
    );
    expect(discountCodeDraft.cartDiscounts[0].typeId).toMatchInlineSnapshot(
      `"cart-discount"`
    );
    expect(discountCodeDraft.isActive).toMatchInlineSnapshot(`true`);
    expect(discountCodeDraft.groups).toMatchInlineSnapshot(`[]`);
    expect(discountCodeDraft.maxApplications).toMatchInlineSnapshot(`1`);
    expect(discountCodeDraft.maxApplicationsPerCustomer).toMatchInlineSnapshot(
      `1`
    );
  });

  it('should return a discount code draft when built for GraphQL', () => {
    const discountCodeDraft =
      shirtsBogo().buildGraphql<TDiscountCodeDraftGraphql>();

    expect(discountCodeDraft.code).toMatchInlineSnapshot(`"BOGO"`);
    expect(discountCodeDraft.name).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "BOGO",
        },
      ]
    `);
    expect(discountCodeDraft.description).toMatchInlineSnapshot(`[]`);
    expect(discountCodeDraft.cartDiscounts[0].key).toMatchInlineSnapshot(
      `"ShirtsBOGO"`
    );
    expect(discountCodeDraft.cartDiscounts[0].typeId).toMatchInlineSnapshot(
      `"cart-discount"`
    );
    expect(discountCodeDraft.isActive).toMatchInlineSnapshot(`true`);
    expect(discountCodeDraft.groups).toMatchInlineSnapshot(`[]`);
    expect(discountCodeDraft.maxApplications).toMatchInlineSnapshot(`1`);
    expect(discountCodeDraft.maxApplicationsPerCustomer).toMatchInlineSnapshot(
      `1`
    );
    expect(discountCodeDraft.__typename).toMatchInlineSnapshot(
      `"DiscountCodeDraft"`
    );
  });
});
