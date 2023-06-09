import {
  TOrderFromCartDraft,
  TOrderFromCartDraftGraphql,
} from '../../../types';
import sampleGermanyCart02 from './sample-germany-cart-02';

describe('with the preset order from cart draft `sampleGermanyCart02`', () => {
  it(`should create an order draft`, () => {
    const orderFromCartDraft =
      sampleGermanyCart02(1).build<TOrderFromCartDraft>();
    expect(orderFromCartDraft).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "mary-02-cart",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": undefined,
        "orderState": "Complete",
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
      sampleGermanyCart02(1).buildGraphql<TOrderFromCartDraftGraphql>();
    expect(orderFromCartDraft).toMatchInlineSnapshot(`
      {
        "cart": {
          "__typename": "Reference",
          "key": "mary-02-cart",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": undefined,
        "orderState": "Complete",
        "paymentState": undefined,
        "purchaseOrderNumber": undefined,
        "shipmentState": undefined,
        "state": undefined,
        "version": 1,
      }
    `);
  });
});
