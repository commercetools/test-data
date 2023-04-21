import {
  TOrderFromCartDraft,
  TOrderFromCartDraftGraphql,
} from '../../../types';
import johnCart01 from './john-cart-01';

describe(`with johnCart01 preset`, () => {
  it(`should create an order draft`, () => {
    const johnCart01OrderFromCartDraft =
      johnCart01(1).build<TOrderFromCartDraft>();
    expect(johnCart01OrderFromCartDraft).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "john-01-cart",
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
    const johnCart01OrderFromCartDraftGraphql =
      johnCart01(1).buildGraphql<TOrderFromCartDraftGraphql>();
    expect(johnCart01OrderFromCartDraftGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "OrderCartCommand",
        "cart": {
          "__typename": "Reference",
          "key": "john-01-cart",
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
