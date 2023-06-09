import {
  TOrderFromCartDraft,
  TOrderFromCartDraftGraphql,
} from '../../../types';
import sampleUsaCart01 from './sample-usa-cart-01';

describe('with the preset order from cart draft `sampleUsaCart01`', () => {
  it(`should create an order draft`, () => {
    const orderFromCartDraft = sampleUsaCart01(1).build<TOrderFromCartDraft>();
    expect(orderFromCartDraft).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "sampleUsa-01-cart",
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
    const orderFromCartDraft =
      sampleUsaCart01(1).buildGraphql<TOrderFromCartDraftGraphql>();
    expect(orderFromCartDraft).toMatchInlineSnapshot(`
      {
        "cart": {
          "__typename": "Reference",
          "key": "sampleUsa-01-cart",
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
