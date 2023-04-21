import {
  TOrderFromCartDraft,
  TOrderFromCartDraftGraphql,
} from '../../../types';
import maryCart01 from './mary-cart-01';

describe(`with maryCart01 preset`, () => {
  it(`should create an order draft`, () => {
    const maryCart01OrderFromCartDraft =
      maryCart01(0).build<TOrderFromCartDraft>();
    expect(maryCart01OrderFromCartDraft).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "mary-01-cart",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": undefined,
        "orderState": "Cancelled",
        "paymentState": undefined,
        "purchaseOrderNumber": undefined,
        "shipmentState": undefined,
        "state": undefined,
        "version": 0,
      }
    `);
  });

  it(`should create an order draft when built for graphql`, () => {
    const maryCart01OrderFromCartDraftGraphql =
      maryCart01(2).buildGraphql<TOrderFromCartDraftGraphql>();
    expect(maryCart01OrderFromCartDraftGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "OrderCartCommand",
        "cart": {
          "__typename": "Reference",
          "key": "mary-01-cart",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": undefined,
        "orderState": "Cancelled",
        "paymentState": undefined,
        "purchaseOrderNumber": undefined,
        "shipmentState": undefined,
        "state": undefined,
        "version": 2,
      }
    `);
  });
});
