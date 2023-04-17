import { TCartDiscountDraft, TCartDiscountDraftGraphql } from '../../../types';
import skinnyFixed from './skinny-fixed';

describe('with the preset `skinnyFixed`', () => {
  it('should return a cart discount draft', () => {
    const cartDiscountDraft = skinnyFixed().build<TCartDiscountDraft>();

    expect(cartDiscountDraft.value).toMatchInlineSnapshot(`
      {
        "money": {
          "centAmount": 2500,
          "currencyCode": "EUR",
          "fractionDigits": 2,
          "type": "centPrecision",
        },
        "type": "fixed",
      }
    `);
    expect(cartDiscountDraft.cartPredicate).toMatchInlineSnapshot(`"1 = 1"`);
    expect(cartDiscountDraft.target).toMatchInlineSnapshot(`undefined`);
    expect(cartDiscountDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Save on Skinny Jeans - 25 EUR per pair",
        "fr": undefined,
      }
    `);
    expect(cartDiscountDraft.description).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Save on Skinny Jeans at 25EUR per pair",
        "fr": undefined,
      }
    `);
    expect(cartDiscountDraft.stackingMode).toMatchInlineSnapshot(`"Stacking"`);
    expect(cartDiscountDraft.isActive).toMatchInlineSnapshot(`true`);
    expect(cartDiscountDraft.requiresDiscountCode).toMatchInlineSnapshot(
      `false`
    );
    expect(cartDiscountDraft.sortOrder).toMatchInlineSnapshot(`"0.6"`);
    expect(cartDiscountDraft.key).toMatchInlineSnapshot(`"SkinnyFixed25"`);
  });

  it('should return a cart discount draft when built for GraphQL', () => {
    const cartDiscountDraft =
      skinnyFixed().buildGraphql<TCartDiscountDraftGraphql>();

    expect(cartDiscountDraft.value).toMatchInlineSnapshot(`
      {
        "__typename": "CartDiscountValueFixedDraft",
        "money": {
          "__typename": "Money",
          "centAmount": 2500,
          "currencyCode": "EUR",
          "fractionDigits": 2,
          "type": "centPrecision",
        },
        "type": "fixed",
      }
    `);
    expect(cartDiscountDraft.cartPredicate).toMatchInlineSnapshot(`"1 = 1"`);
    expect(cartDiscountDraft.target).toMatchInlineSnapshot(`undefined`);
    expect(cartDiscountDraft.name).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Save on Skinny Jeans - 25 EUR per pair",
        },
      ]
    `);
    expect(cartDiscountDraft.description).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Save on Skinny Jeans at 25EUR per pair",
        },
      ]
    `);
    expect(cartDiscountDraft.stackingMode).toMatchInlineSnapshot(`"Stacking"`);
    expect(cartDiscountDraft.isActive).toMatchInlineSnapshot(`true`);
    expect(cartDiscountDraft.requiresDiscountCode).toMatchInlineSnapshot(
      `false`
    );
    expect(cartDiscountDraft.sortOrder).toMatchInlineSnapshot(`"0.6"`);
    expect(cartDiscountDraft.key).toMatchInlineSnapshot(`"SkinnyFixed25"`);
    expect(cartDiscountDraft.__typename).toMatchInlineSnapshot(
      `"CartDiscountDraft"`
    );
  });
});
