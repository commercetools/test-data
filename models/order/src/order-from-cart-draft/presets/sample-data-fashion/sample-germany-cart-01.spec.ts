import {
  TOrderFromCartDraft,
  TOrderFromCartDraftGraphql,
} from '../../../types';
import sampleGermanyCart01 from './sample-germany-cart-01';

describe('with the preset order from cart draft `sampleGermanyCart01`', () => {
  it(`should create an order draft`, () => {
    const orderFromCartDraft =
      sampleGermanyCart01(1).build<TOrderFromCartDraft>();
    expect(orderFromCartDraft).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "sample-germany-01-cart",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": undefined,
        "orderState": "Cancelled",
        "paymentState": undefined,
        "purchaseOrderNumber": undefined,
        "shipmentState": undefined,
        "state": undefined,
        "version": 1,
      }
    `);
  });

  it(`should create an order draft when built for graphql`, () => {
    const orderFromCartDraft =
      sampleGermanyCart01(1).buildGraphql<TOrderFromCartDraftGraphql>();
    expect(orderFromCartDraft).toMatchInlineSnapshot(`
      {
        "cart": {
          "__typename": "Reference",
          "key": "sample-germany-01-cart",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": undefined,
        "orderState": "Cancelled",
        "paymentState": undefined,
        "purchaseOrderNumber": undefined,
        "shipmentState": undefined,
        "state": undefined,
        "version": 1,
      }
    `);
  });
});
