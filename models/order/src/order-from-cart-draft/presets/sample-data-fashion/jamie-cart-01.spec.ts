import {
  TOrderFromCartDraft,
  TOrderFromCartDraftGraphql,
} from '../../../types';
import jamieCart01 from './jamie-cart-01';

describe(`with jamieCart01 preset`, () => {
  it(`should create an order draft`, () => {
    const jamieCart01OrderFromCartDraft =
      jamieCart01(1).build<TOrderFromCartDraft>();
    expect(jamieCart01OrderFromCartDraft).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "jamie-01-cart",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": undefined,
        "orderState": "Open",
        "paymentState": "Paid",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Shipped",
        "state": undefined,
        "version": 1,
      }
    `);
  });

  it(`should create an order draft when built for graphql`, () => {
    const jamieCart01OrderFromCartDraftGraphql =
      jamieCart01(1).buildGraphql<TOrderFromCartDraftGraphql>();
    expect(jamieCart01OrderFromCartDraftGraphql).toMatchInlineSnapshot(`
      {
        "cart": {
          "__typename": "Reference",
          "key": "jamie-01-cart",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": undefined,
        "orderState": "Open",
        "paymentState": "Paid",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Shipped",
        "state": undefined,
        "version": 1,
      }
    `);
  });
});
