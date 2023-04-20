import { TCartDraft } from '../../../types';
import johnDoe02 from './john-doe-02';

describe('with the preset cart `johnDoe02`', () => {
  it('should return a cart discount draft', () => {
    const cartDraft = johnDoe02().build<TCartDraft>();

    expect(cartDraft.key).toMatchInlineSnapshot(`"john-02-cart"`);
    expect(cartDraft.customerEmail).toMatchInlineSnapshot(
      `"john.doe@example.com"`
    );
    expect(cartDraft.customerGroup).toMatchInlineSnapshot(`
      {
        "key": "employee",
        "typeId": "customer-group",
      }
    `);
    expect(cartDraft.currency).toMatchInlineSnapshot(`"EUR"`);
    expect(cartDraft.country).toMatchInlineSnapshot(`"DE"`);
    expect(cartDraft.origin).toMatchInlineSnapshot(`"Merchant"`);
    expect(cartDraft.shippingAddress!.firstName).toMatchInlineSnapshot(
      `"John"`
    );
    expect(cartDraft.lineItems![0].sku).toMatchInlineSnapshot(`"996024"`);
    expect(cartDraft.lineItems![0].quantity).toMatchInlineSnapshot(`1`);
  });

  it('should return a cart discount draft when build for GraphQL', () => {
    const cartDraft = johnDoe02().buildGraphql<TCartDraft>();

    expect(cartDraft.key).toMatchInlineSnapshot(`"john-02-cart"`);
    expect(cartDraft.customerEmail).toMatchInlineSnapshot(
      `"john.doe@example.com"`
    );
    expect(cartDraft.customerGroup).toMatchInlineSnapshot(`
      {
        "__typename": "Reference",
        "key": "employee",
        "typeId": "customer-group",
      }
    `);
    expect(cartDraft.currency).toMatchInlineSnapshot(`"EUR"`);
    expect(cartDraft.country).toMatchInlineSnapshot(`"DE"`);
    expect(cartDraft.origin).toMatchInlineSnapshot(`"Merchant"`);
    expect(cartDraft.shippingAddress!.firstName).toMatchInlineSnapshot(
      `"John"`
    );
    expect(cartDraft.lineItems![0].sku).toMatchInlineSnapshot(`"996024"`);
    expect(cartDraft.lineItems![0].quantity).toMatchInlineSnapshot(`1`);
  });
});
