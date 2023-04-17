import { TCartDiscountDraft, TCartDiscountDraftGraphql } from '../../../types';
import summerFlips from './summer-flips';

describe('with the preset `summerFlips`', () => {
  it('should return a cart discount draft', () => {
    const cartDiscountDraft = summerFlips().build<TCartDiscountDraft>();

    expect(cartDiscountDraft.value).toMatchInlineSnapshot(`
      {
        "distributionChannel": undefined,
        "product": {
          "key": "summer_dress",
          "typeId": "product",
        },
        "supplyChannel": undefined,
        "type": "giftLineItem",
        "variantId": 1,
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
        "__typename": "CartDiscountValueGiftLineItemDraft",
        "distributionChannel": undefined,
        "product": {
          "__typename": "Reference",
          "key": "summer_dress",
          "typeId": "product",
        },
        "supplyChannel": undefined,
        "type": "giftLineItem",
        "variantId": 1,
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
