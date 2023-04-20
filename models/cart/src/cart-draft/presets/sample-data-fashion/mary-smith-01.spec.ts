import { TCartDraft } from '../../../types';
import marySmith01 from './mary-smith-01';

describe('with the preset cart `marySmith01`', () => {
  it('should return a cart discount draft', () => {
    const cartDraft = marySmith01().build<TCartDraft>();

    expect(cartDraft.key).toMatchInlineSnapshot(`"mary-01-cart"`);
    expect(cartDraft.customerEmail).toMatchInlineSnapshot(
      `"mary.smith@example.com"`
    );
    expect(cartDraft.currency).toMatchInlineSnapshot(`"EUR"`);
    expect(cartDraft.country).toMatchInlineSnapshot(`"DE"`);
    expect(cartDraft.origin).toMatchInlineSnapshot(`"Merchant"`);
    expect(cartDraft.shippingAddress!.firstName).toMatchInlineSnapshot(
      `"Mary"`
    );
    expect(cartDraft.lineItems![0].sku).toMatchInlineSnapshot(`"752502"`);
    expect(cartDraft.lineItems![0].quantity).toMatchInlineSnapshot(`1`);
  });

  it('should return a cart discount draft when build for GraphQL', () => {
    const cartDraft = marySmith01().buildGraphql<TCartDraft>();

    expect(cartDraft.key).toMatchInlineSnapshot(`"mary-01-cart"`);
    expect(cartDraft.customerEmail).toMatchInlineSnapshot(
      `"mary.smith@example.com"`
    );
    expect(cartDraft.currency).toMatchInlineSnapshot(`"EUR"`);
    expect(cartDraft.country).toMatchInlineSnapshot(`"DE"`);
    expect(cartDraft.origin).toMatchInlineSnapshot(`"Merchant"`);
    expect(cartDraft.shippingAddress!.firstName).toMatchInlineSnapshot(
      `"Mary"`
    );
    expect(cartDraft.lineItems![0].sku).toMatchInlineSnapshot(`"752502"`);
    expect(cartDraft.lineItems![0].quantity).toMatchInlineSnapshot(`1`);
  });
});
