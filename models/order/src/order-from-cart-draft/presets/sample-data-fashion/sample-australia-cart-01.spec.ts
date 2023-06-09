import {
  TOrderFromCartDraft,
  TOrderFromCartDraftGraphql,
} from '../../../types';
import sampleAustraliaCart01 from './sample-australia-cart-01';

describe('with the preset order from cart draft `sampleAustraliaCart01`', () => {
  it(`should create an order draft`, () => {
    const orderFromCartDraft =
      sampleAustraliaCart01(1).build<TOrderFromCartDraft>();
    expect(orderFromCartDraft).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "sample-australia-01-cart",
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
      sampleAustraliaCart01(1).buildGraphql<TOrderFromCartDraftGraphql>();
    expect(orderFromCartDraft).toMatchInlineSnapshot(`
      {
        "cart": {
          "__typename": "Reference",
          "key": "sample-australia-01-cart",
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
