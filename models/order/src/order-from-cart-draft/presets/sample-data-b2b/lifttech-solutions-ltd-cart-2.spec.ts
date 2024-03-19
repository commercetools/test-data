import type { TOrderFromCartDraft } from '../../../types';
import lifttechSolutionsLtdCart2 from './lifttech-solutions-ltd-cart-2';

describe(`with lifttechSolutionsLtdCart2 preset`, () => {
  it(`should return a lifttechSolutionsLtdCart2 preset`, () => {
    const lifttechSolutionsLtdCart2Preset =
      lifttechSolutionsLtdCart2(1).build<TOrderFromCartDraft>();
    expect(lifttechSolutionsLtdCart2Preset).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-cart-2",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": "lifttech-solutions-ltd-cart-2",
        "orderState": "Confirmed",
        "paymentState": "CreditOwed",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Shipped",
        "state": undefined,
        "version": 1,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdCart2 preset when built for graphql`, () => {
    const lifttechSolutionsLtdCart2PresetGraphql =
      lifttechSolutionsLtdCart2(1).buildGraphql<TOrderFromCartDraft>();
    expect(lifttechSolutionsLtdCart2PresetGraphql).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-cart-2",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": "lifttech-solutions-ltd-cart-2",
        "orderState": "Confirmed",
        "paymentState": "CreditOwed",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Shipped",
        "state": undefined,
        "version": 1,
      }
    `);
  });
});
