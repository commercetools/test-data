import { TCartDraft } from '../../../types';
import jamieDoe01 from './jamie-doe-01';

describe('with the preset cart `jamieDoe01`', () => {
  it('should return a cart discount draft', () => {
    const cartDraft = jamieDoe01().build<TCartDraft>();

    expect(cartDraft.key).toMatchInlineSnapshot(`"jamie-01-cart"`);
    expect(cartDraft.customerEmail).toMatchInlineSnapshot(
      `"jamie.doe@example.com"`
    );
    expect(cartDraft.customerGroup).toMatchInlineSnapshot(`
      {
        "key": "vip",
        "typeId": "customer-group",
      }
    `);
    expect(cartDraft.currency).toMatchInlineSnapshot(`"USD"`);
    expect(cartDraft.country).toMatchInlineSnapshot(`"US"`);
    expect(cartDraft.origin).toMatchInlineSnapshot(`"Merchant"`);
    expect(cartDraft.shippingAddress!.firstName).toMatchInlineSnapshot(
      `"Jamie"`
    );
    expect(cartDraft.lineItems![0].sku).toMatchInlineSnapshot(`"718289"`);
    expect(cartDraft.lineItems![0].quantity).toMatchInlineSnapshot(`2`);
  });

  it('should return a cart discount draft when build for GraphQL', () => {
    const cartDraft = jamieDoe01().buildGraphql<TCartDraft>();

    expect(cartDraft.key).toMatchInlineSnapshot(`"jamie-01-cart"`);
    expect(cartDraft.customerEmail).toMatchInlineSnapshot(
      `"jamie.doe@example.com"`
    );
    expect(cartDraft.customerGroup).toMatchInlineSnapshot(`
      {
        "__typename": "Reference",
        "key": "vip",
        "typeId": "customer-group",
      }
    `);
    expect(cartDraft.currency).toMatchInlineSnapshot(`"USD"`);
    expect(cartDraft.country).toMatchInlineSnapshot(`"US"`);
    expect(cartDraft.origin).toMatchInlineSnapshot(`"Merchant"`);
    expect(cartDraft.shippingAddress!.firstName).toMatchInlineSnapshot(
      `"Jamie"`
    );
    expect(cartDraft.lineItems![0].sku).toMatchInlineSnapshot(`"718289"`);
    expect(cartDraft.lineItems![0].quantity).toMatchInlineSnapshot(`2`);
  });
});
