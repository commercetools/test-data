import type { TOrderFromCartDraft } from '../../../types';
import lifttechSolutionsLtdDeCart2 from './lifttech-solutions-ltd-de-cart-2';

describe(`with lifttechSolutionsLtdDeCart2 preset`, () => {
  it(`should return a lifttechSolutionsLtdDeCart2 preset`, () => {
    const lifttechSolutionsLtdDeCart2Preset =
      lifttechSolutionsLtdDeCart2(1).build<TOrderFromCartDraft>();
    expect(lifttechSolutionsLtdDeCart2Preset).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-de-cart-2",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": undefined,
        "orderState": "Confirmed",
        "paymentState": "BalanceDue",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Backorder",
        "state": undefined,
        "version": 1,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdDeCart2 preset when built for graphql`, () => {
    const lifttechSolutionsLtdDeCart2PresetGraphql =
      lifttechSolutionsLtdDeCart2(1).buildGraphql<TOrderFromCartDraft>();
    expect(lifttechSolutionsLtdDeCart2PresetGraphql).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-de-cart-2",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": undefined,
        "orderState": "Confirmed",
        "paymentState": "BalanceDue",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Backorder",
        "state": undefined,
        "version": 1,
      }
    `);
  });
});
