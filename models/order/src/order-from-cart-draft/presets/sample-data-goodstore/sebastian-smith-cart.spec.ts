import {
  TOrderFromCartDraft,
  TOrderFromCartDraftGraphql,
} from '../../../types';
import sebastianSmithCart01 from './sebastian-smith-cart';

describe('with the preset order from cart draft `sebastianSmithCart01`', () => {
  it(`should create an order draft`, () => {
    const orderFromCartDraft =
      sebastianSmithCart01(1).build<TOrderFromCartDraft>();
    expect(orderFromCartDraft).toMatchInlineSnapshot();
  });

  it(`should create an order draft when built for graphql`, () => {
    const orderFromCartDraft =
      sebastianSmithCart01(1).buildGraphql<TOrderFromCartDraftGraphql>();
    expect(orderFromCartDraft).toMatchInlineSnapshot();
  });
});
