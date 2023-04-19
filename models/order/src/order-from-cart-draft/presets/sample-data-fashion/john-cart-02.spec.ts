import {
  TOrderFromCartDraft,
  TOrderFromCartDraftGraphql,
} from '../../../types';
import johnCart02 from './john-cart-02';

describe(`with johnCart02 preset`, () => {
  it(`should create an order draft`, () => {
    const johnCart02OrderFromCartDraft =
      johnCart02().build<TOrderFromCartDraft>();
    expect(johnCart02OrderFromCartDraft).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "john-02-cart",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": undefined,
        "orderState": "Confirmed",
        "paymentState": "Paid",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Delayed",
        "state": undefined,
        "version": null,
      }
    `);
  });

  it(`should create an order draft when built for graphql`, () => {
    const johnCart02OrderFromCartDraftGraphql =
      johnCart02().buildGraphql<TOrderFromCartDraftGraphql>();
    expect(johnCart02OrderFromCartDraftGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "OrderCartCommand",
        "cart": {
          "__typename": "Reference",
          "key": "john-02-cart",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": undefined,
        "orderState": "Confirmed",
        "paymentState": "Paid",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Delayed",
        "state": undefined,
        "version": null,
      }
    `);
  });
});
