import { TCartDiscountDraft, TCartDiscountDraftGraphql } from '../../../types';
import spendSaveTenPercent from './spend-save-ten-percent';

describe('with the preset `spendSaveTenPercent`', () => {
  it('should return a cart discount draft', () => {
    const cartDiscountDraft = spendSaveTenPercent().build<TCartDiscountDraft>();

    expect(cartDiscountDraft.value).toMatchInlineSnapshot(`
      {
        "permyriad": 1000,
        "type": "relative",
      }
    `);
    expect(cartDiscountDraft.cartPredicate).toMatchInlineSnapshot(
      `"totalPrice = "100.00 EUR""`
    );
    expect(cartDiscountDraft.target).toMatchInlineSnapshot(`undefined`);
    expect(cartDiscountDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Save 10% when you spend 100EUR",
        "fr": undefined,
      }
    `);
    expect(cartDiscountDraft.description).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Save 10% when you spend 100EUR",
        "fr": undefined,
      }
    `);
    expect(cartDiscountDraft.stackingMode).toMatchInlineSnapshot(`"Stacking"`);
    expect(cartDiscountDraft.isActive).toMatchInlineSnapshot(`true`);
    expect(cartDiscountDraft.requiresDiscountCode).toMatchInlineSnapshot(
      `false`
    );
    expect(cartDiscountDraft.sortOrder).toMatchInlineSnapshot(`"0.897987087"`);
    expect(cartDiscountDraft.key).toMatchInlineSnapshot(
      `"Spend100EURSave10pct"`
    );
  });

  it('should return a cart discount draft when built for GraphQL', () => {
    const cartDiscountDraft =
      spendSaveTenPercent().buildGraphql<TCartDiscountDraftGraphql>();

    expect(cartDiscountDraft.value).toMatchInlineSnapshot(`
      {
        "__typename": "CartDiscountValueRelativeDraft",
        "permyriad": 1000,
        "type": "relative",
      }
    `);
    expect(cartDiscountDraft.cartPredicate).toMatchInlineSnapshot(
      `"totalPrice = "100.00 EUR""`
    );
    expect(cartDiscountDraft.target).toMatchInlineSnapshot(`undefined`);
    expect(cartDiscountDraft.name).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Save 10% when you spend 100EUR",
        },
      ]
    `);
    expect(cartDiscountDraft.description).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Save 10% when you spend 100EUR",
        },
      ]
    `);
    expect(cartDiscountDraft.stackingMode).toMatchInlineSnapshot(`"Stacking"`);
    expect(cartDiscountDraft.isActive).toMatchInlineSnapshot(`true`);
    expect(cartDiscountDraft.requiresDiscountCode).toMatchInlineSnapshot(
      `false`
    );
    expect(cartDiscountDraft.sortOrder).toMatchInlineSnapshot(`"0.897987087"`);
    expect(cartDiscountDraft.key).toMatchInlineSnapshot(
      `"Spend100EURSave10pct"`
    );
    expect(cartDiscountDraft.__typename).toMatchInlineSnapshot(
      `"CartDiscountDraft"`
    );
  });
});
