import {
  TOrderFromCartDraft,
  TOrderFromCartDraftGraphql,
} from '../../../types';
import jenniferJonesCart01 from './jennifer-jones-cart';

describe('with the preset order from cart draft `jenniferJonesCart01`', () => {
  it(`should create an order draft`, () => {
    const orderFromCartDraft =
      jenniferJonesCart01(1).build<TOrderFromCartDraft>();
    expect(orderFromCartDraft).toMatchInlineSnapshot();
  });

  it(`should create an order draft when built for graphql`, () => {
    const orderFromCartDraft =
      jenniferJonesCart01(1).buildGraphql<TOrderFromCartDraftGraphql>();
    expect(orderFromCartDraft).toMatchInlineSnapshot();
  });
});
