import type {
  TOrderFromCartDraft,
  TOrderFromCartDraftGraphql,
} from '../../../types';
import sebastianSmithCart01 from './sebastian-smith-cart-01';

describe('with the preset order from cart draft `sebastianSmithCart01`', () => {
  it(`should create an order draft`, () => {
    const orderFromCartDraft =
      sebastianSmithCart01(1).build<TOrderFromCartDraft>();
    expect(orderFromCartDraft).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "sebastian-smith-01",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": undefined,
        "orderState": "Open",
        "paymentState": "Pending",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Pending",
        "state": undefined,
        "version": 1,
      }
    `);
  });

  it(`should create an order draft when built for graphql`, () => {
    const orderFromCartDraft =
      sebastianSmithCart01(1).buildGraphql<TOrderFromCartDraftGraphql>();
    expect(orderFromCartDraft).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "sebastian-smith-01",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": undefined,
        "orderState": "Open",
        "paymentState": "Pending",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Pending",
        "state": undefined,
        "version": 1,
      }
    `);
  });
});
