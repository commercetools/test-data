import { TCartDiscountDraft, TCartDiscountDraftGraphql } from '../../../types';
import luxeSpend from './luxe-spend';

describe('with the preset `luxeSpend`', () => {
  it('should return a cart discount draft', () => {
    const cartDiscountDraft = luxeSpend().build<TCartDiscountDraft>();

    expect(cartDiscountDraft.value).toMatchInlineSnapshot(`
      {
        "money": {
          "centAmount": 3000,
          "currencyCode": "EUR",
          "fractionDigits": 2,
          "type": "centPrecision",
        },
        "type": "absolute",
      }
    `);
    expect(cartDiscountDraft.cartPredicate).toMatchInlineSnapshot(
      `"totalPrice = "500.00 EUR" and customer.customerGroup.key = "luxe""`
    );
    expect(cartDiscountDraft.target).toMatchInlineSnapshot(`undefined`);
    expect(cartDiscountDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Luxe customers! Spend 500EUR and Save 30EUR",
        "fr": undefined,
      }
    `);
    expect(cartDiscountDraft.description).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Luxe customers - Get 30 EUR back when you spend 500EUR",
        "fr": undefined,
      }
    `);
    expect(cartDiscountDraft.stackingMode).toMatchInlineSnapshot(`"Stacking"`);
    expect(cartDiscountDraft.isActive).toMatchInlineSnapshot(`true`);
    expect(cartDiscountDraft.requiresDiscountCode).toMatchInlineSnapshot(
      `false`
    );
    expect(cartDiscountDraft.sortOrder).toMatchInlineSnapshot(`"0.876899"`);
    expect(cartDiscountDraft.key).toMatchInlineSnapshot(`"LuxeSpend500Save30"`);
  });

  it('should return a cart discount draft when built for GraphQL', () => {
    const cartDiscountDraft =
      luxeSpend().buildGraphql<TCartDiscountDraftGraphql>();

    expect(cartDiscountDraft.value).toMatchInlineSnapshot(`
      {
        "__typename": "CartDiscountValueAbsoluteDraft",
        "money": {
          "__typename": "MoneyInput",
          "centAmount": 3000,
          "currencyCode": "EUR",
          "fractionDigits": 2,
          "type": "centPrecision",
        },
        "type": "absolute",
      }
    `);
    expect(cartDiscountDraft.cartPredicate).toMatchInlineSnapshot(
      `"totalPrice = "500.00 EUR" and customer.customerGroup.key = "luxe""`
    );
    expect(cartDiscountDraft.target).toMatchInlineSnapshot(`undefined`);
    expect(cartDiscountDraft.name).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Luxe customers! Spend 500EUR and Save 30EUR",
        },
      ]
    `);
    expect(cartDiscountDraft.description).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Luxe customers - Get 30 EUR back when you spend 500EUR",
        },
      ]
    `);
    expect(cartDiscountDraft.stackingMode).toMatchInlineSnapshot(`"Stacking"`);
    expect(cartDiscountDraft.isActive).toMatchInlineSnapshot(`true`);
    expect(cartDiscountDraft.requiresDiscountCode).toMatchInlineSnapshot(
      `false`
    );
    expect(cartDiscountDraft.sortOrder).toMatchInlineSnapshot(`"0.876899"`);
    expect(cartDiscountDraft.key).toMatchInlineSnapshot(`"LuxeSpend500Save30"`);
    expect(cartDiscountDraft.__typename).toMatchInlineSnapshot(
      `"CartDiscountDraft"`
    );
  });
});
