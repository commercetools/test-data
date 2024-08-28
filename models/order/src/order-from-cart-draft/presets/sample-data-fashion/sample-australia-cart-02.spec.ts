import type {
  TOrderFromCartDraft,
  TOrderFromCartDraftGraphql,
} from '../../../types';
import sampleAustraliaCart02 from './sample-australia-cart-02';

describe('with the preset order from cart draft `sampleAustraliaCart02`', () => {
  it(`should create an order draft`, () => {
    const orderFromCartDraft =
      sampleAustraliaCart02(1).build<TOrderFromCartDraft>();
    expect(orderFromCartDraft).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "sample-australia-02-cart",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": undefined,
        "orderState": "Confirmed",
        "paymentState": "Paid",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Delayed",
        "state": undefined,
        "version": 1,
      }
    `);
  });

  it(`should create an order draft when built for graphql`, () => {
    const orderFromCartDraft =
      sampleAustraliaCart02(1).buildGraphql<TOrderFromCartDraftGraphql>();
    expect(orderFromCartDraft).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "sample-australia-02-cart",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": undefined,
        "orderState": "Confirmed",
        "paymentState": "Paid",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Delayed",
        "state": undefined,
        "version": 1,
      }
    `);
  });
});
