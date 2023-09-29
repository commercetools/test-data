import {
  TOrderFromCartDraft,
  TOrderFromCartDraftGraphql,
} from '../../../types';
import sebastianFranklinCart01 from './sebastian-franklin-cart-01';

describe('with the preset order from cart draft `sebastianFranklinCart01`', () => {
  it(`should create an order draft`, () => {
    const orderFromCartDraft =
      sebastianFranklinCart01(1).build<TOrderFromCartDraft>();
    expect(orderFromCartDraft).toMatchInlineSnapshot();
  });

  it(`should create an order draft when built for graphql`, () => {
    const orderFromCartDraft =
      sebastianFranklinCart01(1).buildGraphql<TOrderFromCartDraftGraphql>();
    expect(orderFromCartDraft).toMatchInlineSnapshot();
  });
});
