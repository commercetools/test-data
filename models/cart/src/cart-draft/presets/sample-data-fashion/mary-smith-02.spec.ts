import { TCartDraft } from '../../../types';
import marySmith02 from './mary-smith-02';

describe('with the preset cart `marySmith01`', () => {
  it('should return a cart discount draft', () => {
    const cartDraft = marySmith02().build<TCartDraft>();

    expect(cartDraft.key).toMatchInlineSnapshot(`"mary-02-cart"`);
    expect(cartDraft.customerEmail).toMatchInlineSnapshot(
      `"mary.smith@example.com"`
    );
    expect(cartDraft.currency).toMatchInlineSnapshot(`"EUR"`);
    expect(cartDraft.country).toMatchInlineSnapshot(`"DE"`);
    expect(cartDraft.origin).toMatchInlineSnapshot(`"Merchant"`);
    expect(cartDraft.shippingAddress!.firstName).toMatchInlineSnapshot(
      `"Mary"`
    );
    expect(cartDraft.lineItems![0].sku).toMatchInlineSnapshot(`"118718"`);
    expect(cartDraft.lineItems![0].quantity).toMatchInlineSnapshot(`2`);
  });

  it('should return a cart discount draft when build for GraphQL', () => {
    const cartDraft = marySmith02().buildGraphql<TCartDraft>();

    expect(cartDraft.key).toMatchInlineSnapshot(`"mary-02-cart"`);
    expect(cartDraft.customerEmail).toMatchInlineSnapshot(
      `"mary.smith@example.com"`
    );
    expect(cartDraft.currency).toMatchInlineSnapshot(`"EUR"`);
    expect(cartDraft.country).toMatchInlineSnapshot(`"DE"`);
    expect(cartDraft.origin).toMatchInlineSnapshot(`"Merchant"`);
    expect(cartDraft.shippingAddress!.firstName).toMatchInlineSnapshot(
      `"Mary"`
    );
    expect(cartDraft.lineItems![0].sku).toMatchInlineSnapshot(`"118718"`);
    expect(cartDraft.lineItems![0].quantity).toMatchInlineSnapshot(`2`);
  });
});
