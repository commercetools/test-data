import type {
  TCartDiscountDraft,
  TCartDiscountDraftGraphql,
} from '../../../types';
import freeShipping from './free-shipping';

describe('with the preset `freeShipping`', () => {
  it('should return a cart discount draft', () => {
    const cartDiscountDraft = freeShipping().build<TCartDiscountDraft>();

    expect(cartDiscountDraft).toMatchInlineSnapshot();
  });

  it('should return a cart discount draft when built for GraphQL', () => {
    const cartDiscountDraft =
      freeShipping().buildGraphql<TCartDiscountDraftGraphql>();

    expect(cartDiscountDraft).toMatchInlineSnapshot();
  });
});
