import { TCartDiscountDraft, TCartDiscountDraftGraphql } from '../../../types';
import freeShipping from './free-shipping';

describe('with the preset `freeShipping`', () => {
  it('should return a cart discount draft', () => {
    const cartDiscountDraft = freeShipping().build<TCartDiscountDraft>();

    expect(cartDiscountDraft.value).toMatchInlineSnapshot(`
      {
        "permyriad": 10000,
        "type": "relative",
      }
    `);
    expect(cartDiscountDraft.cartPredicate).toMatchInlineSnapshot(`"1 = 1"`);
    expect(cartDiscountDraft.target).toMatchInlineSnapshot(`undefined`);
    expect(cartDiscountDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Free Shipping when you spend 100EUR",
        "fr": undefined,
      }
    `);
    expect(cartDiscountDraft.description).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Free shipping when your order is at least 100 EUR",
        "fr": undefined,
      }
    `);
    expect(cartDiscountDraft.stackingMode).toMatchInlineSnapshot(`"Stacking"`);
    expect(cartDiscountDraft.isActive).toMatchInlineSnapshot(`true`);
    expect(cartDiscountDraft.requiresDiscountCode).toMatchInlineSnapshot(
      `false`
    );
    expect(cartDiscountDraft.sortOrder).toMatchInlineSnapshot(`"0.222"`);
    expect(cartDiscountDraft.key).toMatchInlineSnapshot(`"FreeShip100"`);
  });

  it('should return a cart discount draft when built for GraphQL', () => {
    const cartDiscountDraft =
      freeShipping().buildGraphql<TCartDiscountDraftGraphql>();

    expect(cartDiscountDraft.value).toMatchInlineSnapshot(`
      {
        "__typename": "CartDiscountValueRelative",
        "permyriad": 10000,
        "type": "relative",
      }
    `);
    expect(cartDiscountDraft.cartPredicate).toMatchInlineSnapshot(`"1 = 1"`);
    expect(cartDiscountDraft.target).toMatchInlineSnapshot(`undefined`);
    expect(cartDiscountDraft.name).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Free Shipping when you spend 100EUR",
        },
      ]
    `);
    expect(cartDiscountDraft.description).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Free shipping when your order is at least 100 EUR",
        },
      ]
    `);
    expect(cartDiscountDraft.stackingMode).toMatchInlineSnapshot(`"Stacking"`);
    expect(cartDiscountDraft.isActive).toMatchInlineSnapshot(`true`);
    expect(cartDiscountDraft.requiresDiscountCode).toMatchInlineSnapshot(
      `false`
    );
    expect(cartDiscountDraft.sortOrder).toMatchInlineSnapshot(`"0.222"`);
    expect(cartDiscountDraft.key).toMatchInlineSnapshot(`"FreeShip100"`);
    expect(cartDiscountDraft.__typename).toMatchInlineSnapshot(
      `"CartDiscountDraft"`
    );
  });
});
