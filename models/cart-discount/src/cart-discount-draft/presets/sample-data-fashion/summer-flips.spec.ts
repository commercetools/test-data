import { TCartDiscountDraft, TCartDiscountDraftGraphql } from '../../../types';
import summerFlips from './summer-flips';

describe('with the preset `summerFlips`', () => {
  it('should return a cart discount draft', () => {
    const cartDiscountDraft = summerFlips().build<TCartDiscountDraft>();

    expect(cartDiscountDraft.value).toMatchInlineSnapshot(`
      {
        "distributionChannel": {
          "id": "7d8a157d-2316-4576-a563-34c21810d392",
          "key": null,
          "typeId": "channel",
        },
        "product": {
          "id": "c03b5719-32ea-4ff3-af01-b5824ca6ea1f",
          "key": "summer_dress",
          "typeId": "product",
        },
        "supplyChannel": {
          "id": "c897a6a3-c0c1-4648-8096-8d12aa5bf5e0",
          "key": null,
          "typeId": "channel",
        },
        "type": "giftLineItem",
        "variantId": 20772,
      }
    `);
    expect(cartDiscountDraft.cartPredicate).toMatchInlineSnapshot(
      `"lineItemExists(product.key = "summer_dress") = true"`
    );
    expect(cartDiscountDraft.target).toMatchInlineSnapshot(`undefined`);
    expect(cartDiscountDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Summer special - get a free pair of flip flops with the Summer Dress",
        "fr": undefined,
      }
    `);
    expect(cartDiscountDraft.description).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Purchase the Summer Dress and get a free pair of flip flops",
        "fr": undefined,
      }
    `);
    expect(cartDiscountDraft.stackingMode).toMatchInlineSnapshot(`"Stacking"`);
    expect(cartDiscountDraft.isActive).toMatchInlineSnapshot(`true`);
    expect(cartDiscountDraft.requiresDiscountCode).toMatchInlineSnapshot(
      `false`
    );
    expect(cartDiscountDraft.sortOrder).toMatchInlineSnapshot(`"0.888"`);
    expect(cartDiscountDraft.key).toMatchInlineSnapshot(`"GWPSummerFlips"`);
  });

  it('should return a cart discount draft when built for GraphQL', () => {
    const cartDiscountDraft =
      summerFlips().buildGraphql<TCartDiscountDraftGraphql>();

    expect(cartDiscountDraft.value).toMatchInlineSnapshot(`
      {
        "__typename": "CartDiscountValueGiftLineItem",
        "distributionChannel": {
          "__typename": "Reference",
          "id": "3ba097e2-d60f-4c19-a253-4aa633607cc8",
          "key": null,
          "typeId": "channel",
        },
        "product": {
          "__typename": "Reference",
          "id": "53f41f71-5cd3-4c6b-b11b-535407f2d618",
          "key": "summer_dress",
          "typeId": "product",
        },
        "supplyChannel": {
          "__typename": "Reference",
          "id": "68021a35-d6d6-43d0-b86a-0128e7b10b27",
          "key": null,
          "typeId": "channel",
        },
        "type": "giftLineItem",
        "variantId": 9985,
      }
    `);
    expect(cartDiscountDraft.cartPredicate).toMatchInlineSnapshot(
      `"lineItemExists(product.key = "summer_dress") = true"`
    );
    expect(cartDiscountDraft.target).toMatchInlineSnapshot(`undefined`);
    expect(cartDiscountDraft.name).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Summer special - get a free pair of flip flops with the Summer Dress",
        },
      ]
    `);
    expect(cartDiscountDraft.description).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Purchase the Summer Dress and get a free pair of flip flops",
        },
      ]
    `);
    expect(cartDiscountDraft.stackingMode).toMatchInlineSnapshot(`"Stacking"`);
    expect(cartDiscountDraft.isActive).toMatchInlineSnapshot(`true`);
    expect(cartDiscountDraft.requiresDiscountCode).toMatchInlineSnapshot(
      `false`
    );
    expect(cartDiscountDraft.sortOrder).toMatchInlineSnapshot(`"0.888"`);
    expect(cartDiscountDraft.key).toMatchInlineSnapshot(`"GWPSummerFlips"`);
    expect(cartDiscountDraft.__typename).toMatchInlineSnapshot(
      `"CartDiscountDraft"`
    );
  });
});
