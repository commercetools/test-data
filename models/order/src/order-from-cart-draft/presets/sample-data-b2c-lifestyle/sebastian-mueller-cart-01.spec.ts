import type {
  TOrderFromCartDraft,
  TOrderFromCartDraftGraphql,
} from '../../../types';
import sebastianMuellerCart01 from './sebastian-mueller-cart-01';

describe('with the preset order from cart draft `sebastianMuellerCart01`', () => {
  it(`should create an order draft`, () => {
    const orderFromCartDraft =
      sebastianMuellerCart01(1).build<TOrderFromCartDraft>();
    expect(orderFromCartDraft).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "sebastian-mueller-01",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": undefined,
        "orderState": "Confirmed",
        "paymentState": "Paid",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Ready",
        "state": undefined,
        "version": 1,
      }
    `);
  });

  it(`should create an order draft when built for graphql`, () => {
    const orderFromCartDraft =
      sebastianMuellerCart01(1).buildGraphql<TOrderFromCartDraftGraphql>();
    expect(orderFromCartDraft).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "sebastian-mueller-01",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": undefined,
        "orderState": "Confirmed",
        "paymentState": "Paid",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Ready",
        "state": undefined,
        "version": 1,
      }
    `);
  });
});
