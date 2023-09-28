import {
  TOrderFromCartDraft,
  TOrderFromCartDraftGraphql,
} from '../../../types';
import sebastianMuellerCart01 from './sebastian-mueller-cart';

describe('with the preset order from cart draft `sebastianMuellerCart01`', () => {
  it(`should create an order draft`, () => {
    const orderFromCartDraft =
      sebastianMuellerCart01(1).build<TOrderFromCartDraft>();
    expect(orderFromCartDraft).toMatchInlineSnapshot();
  });

  it(`should create an order draft when built for graphql`, () => {
    const orderFromCartDraft =
      sebastianMuellerCart01(1).buildGraphql<TOrderFromCartDraftGraphql>();
    expect(orderFromCartDraft).toMatchInlineSnapshot();
  });
});
