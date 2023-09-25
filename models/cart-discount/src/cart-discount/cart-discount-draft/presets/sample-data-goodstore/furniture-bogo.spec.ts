import type {
  TCartDiscountDraft,
  TCartDiscountDraftGraphql,
} from '../../../types';
import furnitureBogo from './furniture-bogo';

describe('with the preset `furnitureBogo`', () => {
  it('should return a cart discount draft', () => {
    const cartDiscountDraft = furnitureBogo().build<TCartDiscountDraft>();

    expect(cartDiscountDraft).toMatchInlineSnapshot();
  });

  it('should return a cart discount draft when built for GraphQL', () => {
    const cartDiscountDraft =
      furnitureBogo().buildGraphql<TCartDiscountDraftGraphql>();

    expect(cartDiscountDraft).toMatchInlineSnapshot();
  });
});
