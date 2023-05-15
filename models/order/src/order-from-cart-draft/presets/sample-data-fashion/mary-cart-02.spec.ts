import {
  TOrderFromCartDraft,
  TOrderFromCartDraftGraphql,
} from '../../../types';
import maryCart02 from './mary-cart-02';

describe(`with maryCart02 preset`, () => {
  it(`should create an order draft`, () => {
    const maryCart02OrderFromCartDraft =
      maryCart02(1).build<TOrderFromCartDraft>();
    expect(maryCart02OrderFromCartDraft).toMatchInlineSnapshot(`
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
    const maryCart02OrderFromCartDraftGraphql =
      maryCart02(1).buildGraphql<TOrderFromCartDraftGraphql>();
    expect(maryCart02OrderFromCartDraftGraphql).toMatchInlineSnapshot(`
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
