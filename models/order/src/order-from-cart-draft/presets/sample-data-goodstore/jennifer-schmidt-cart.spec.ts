import {
  TOrderFromCartDraft,
  TOrderFromCartDraftGraphql,
} from '../../../types';
import jenniferSchmidtCart01 from './jennifer-schmidt-cart';

describe('with the preset order from cart draft `jenniferSchmidtCart01`', () => {
  it(`should create an order draft`, () => {
    const orderFromCartDraft =
      jenniferSchmidtCart01(1).build<TOrderFromCartDraft>();
    expect(orderFromCartDraft).toMatchInlineSnapshot();
  });

  it(`should create an order draft when built for graphql`, () => {
    const orderFromCartDraft =
      jenniferSchmidtCart01(1).buildGraphql<TOrderFromCartDraftGraphql>();
    expect(orderFromCartDraft).toMatchInlineSnapshot();
  });
});
