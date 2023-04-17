import { TCartDiscountDraft, TCartDiscountDraftGraphql } from '../../../types';
import percentOffWomensWear from './percent-off-womens-wear';

describe('with the preset `percentOffWomensWear`', () => {
  it('should return a cart discount draft', () => {
    const cartDiscountDraft =
      percentOffWomensWear().build<TCartDiscountDraft>();

    expect(cartDiscountDraft.value).toMatchInlineSnapshot(`
      {
        "permyriad": 1500,
        "type": "relative",
      }
    `);
    expect(cartDiscountDraft.cartPredicate).toMatchInlineSnapshot(`"1 = 1"`);
    expect(cartDiscountDraft.target).toMatchInlineSnapshot(`undefined`);
    expect(cartDiscountDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "15% off all regular priced Women's wear",
        "fr": undefined,
      }
    `);
    expect(cartDiscountDraft.description).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Take 15% off any full priced item from our Women's category",
        "fr": undefined,
      }
    `);
    expect(cartDiscountDraft.stackingMode).toMatchInlineSnapshot(`"Stacking"`);
    expect(cartDiscountDraft.isActive).toMatchInlineSnapshot(`true`);
    expect(cartDiscountDraft.requiresDiscountCode).toMatchInlineSnapshot(
      `false`
    );
    expect(cartDiscountDraft.sortOrder).toMatchInlineSnapshot(`"0.3445"`);
    expect(cartDiscountDraft.key).toMatchInlineSnapshot(
      `"15pctOffWomensRegPrice"`
    );
  });

  it('should return a cart discount draft when built for GraphQL', () => {
    const cartDiscountDraft =
      percentOffWomensWear().buildGraphql<TCartDiscountDraftGraphql>();

    expect(cartDiscountDraft.value).toMatchInlineSnapshot(`
      {
        "__typename": "CartDiscountValueRelativeDraft",
        "permyriad": 1500,
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
          "value": "15% off all regular priced Women's wear",
        },
      ]
    `);
    expect(cartDiscountDraft.description).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Take 15% off any full priced item from our Women's category",
        },
      ]
    `);
    expect(cartDiscountDraft.stackingMode).toMatchInlineSnapshot(`"Stacking"`);
    expect(cartDiscountDraft.isActive).toMatchInlineSnapshot(`true`);
    expect(cartDiscountDraft.requiresDiscountCode).toMatchInlineSnapshot(
      `false`
    );
    expect(cartDiscountDraft.sortOrder).toMatchInlineSnapshot(`"0.3445"`);
    expect(cartDiscountDraft.key).toMatchInlineSnapshot(
      `"15pctOffWomensRegPrice"`
    );
    expect(cartDiscountDraft.__typename).toMatchInlineSnapshot(
      `"CartDiscountDraft"`
    );
  });
});
