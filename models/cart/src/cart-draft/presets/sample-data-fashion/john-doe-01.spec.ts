import { TCartDraft } from '../../../types';
import johnDoe01 from './john-doe-01';

describe('with the preset cart `johnDoe01`', () => {
  it('should return a cart discount draft', () => {
    const cartDraft = johnDoe01().build<TCartDraft>();

    expect(cartDraft.key).toMatchInlineSnapshot(`"john-01-cart"`);
    expect(cartDraft.customerEmail).toMatchInlineSnapshot(
      `"john.doe@example.com"`
    );
    expect(cartDraft.customerGroup).toMatchInlineSnapshot(`
      {
        "key": "employee",
        "typeId": "customer-group",
      }
    `);
    expect(cartDraft.currency).toMatchInlineSnapshot(`"AUD"`);
    expect(cartDraft.country).toMatchInlineSnapshot(`"AU"`);
    expect(cartDraft.origin).toMatchInlineSnapshot(`"Merchant"`);
    expect(cartDraft.shippingAddress!.firstName).toMatchInlineSnapshot(
      `"John"`
    );
    expect(cartDraft.lineItems![0].sku).toMatchInlineSnapshot(`"148096"`);
    expect(cartDraft.lineItems![0].quantity).toMatchInlineSnapshot(`1`);
  });

  it('should return a cart discount draft when build for GraphQL', () => {
    const cartDraft = johnDoe01().buildGraphql<TCartDraft>();

    expect(cartDraft.key).toMatchInlineSnapshot(`"john-01-cart"`);
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
    expect(cartDraft.currency).toMatchInlineSnapshot(`"AUD"`);
    expect(cartDraft.country).toMatchInlineSnapshot(`"AU"`);
    expect(cartDraft.origin).toMatchInlineSnapshot(`"Merchant"`);
    expect(cartDraft.shippingAddress!.firstName).toMatchInlineSnapshot(
      `"John"`
    );
    expect(cartDraft.lineItems![0].sku).toMatchInlineSnapshot(`"148096"`);
    expect(cartDraft.lineItems![0].quantity).toMatchInlineSnapshot(`1`);
  });
});
