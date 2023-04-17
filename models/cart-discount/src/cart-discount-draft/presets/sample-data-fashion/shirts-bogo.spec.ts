import { TCartDiscountDraft, TCartDiscountDraftGraphql } from '../../../types';
import shirtsBogo from './shirts-bogo';

describe('with the preset `shirtsBogo`', () => {
  it('should return a cart discount draft', () => {
    const cartDiscountDraft = shirtsBogo().build<TCartDiscountDraft>();

    expect(cartDiscountDraft.value).toMatchInlineSnapshot(`
      {
        "permyriad": 1000,
        "type": "relative",
      }
    `);
    expect(cartDiscountDraft.cartPredicate).toMatchInlineSnapshot(`"1 = 1"`);
    expect(cartDiscountDraft.target).toMatchInlineSnapshot(`undefined`);
    expect(cartDiscountDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Buy One Shirt and Get Second Free",
        "fr": undefined,
      }
    `);
    expect(cartDiscountDraft.description).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Two for one on all Shirts (discount on the cheapest item)",
        "fr": undefined,
      }
    `);
    expect(cartDiscountDraft.stackingMode).toMatchInlineSnapshot(`"Stacking"`);
    expect(cartDiscountDraft.isActive).toMatchInlineSnapshot(`true`);
    expect(cartDiscountDraft.requiresDiscountCode).toMatchInlineSnapshot(
      `true`
    );
    expect(cartDiscountDraft.sortOrder).toMatchInlineSnapshot(`"0.2"`);
    expect(cartDiscountDraft.key).toMatchInlineSnapshot(`"ShirtsBOGO"`);
  });

  it('should return a cart discount draft when built for GraphQL', () => {
    const cartDiscountDraft =
      shirtsBogo().buildGraphql<TCartDiscountDraftGraphql>();

    expect(cartDiscountDraft.value).toMatchInlineSnapshot(`
      {
        "__typename": "CartDiscountValueRelativeDraft",
        "permyriad": 1000,
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
          "value": "Buy One Shirt and Get Second Free",
        },
      ]
    `);
    expect(cartDiscountDraft.description).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Two for one on all Shirts (discount on the cheapest item)",
        },
      ]
    `);
    expect(cartDiscountDraft.stackingMode).toMatchInlineSnapshot(`"Stacking"`);
    expect(cartDiscountDraft.isActive).toMatchInlineSnapshot(`true`);
    expect(cartDiscountDraft.requiresDiscountCode).toMatchInlineSnapshot(
      `true`
    );
    expect(cartDiscountDraft.sortOrder).toMatchInlineSnapshot(`"0.2"`);
    expect(cartDiscountDraft.key).toMatchInlineSnapshot(`"ShirtsBOGO"`);
    expect(cartDiscountDraft.__typename).toMatchInlineSnapshot(
      `"CartDiscountDraft"`
    );
  });
});
