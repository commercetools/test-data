import type { TOrderFromCartDraft } from '../../../types';
import lifttechSolutionsLtdFrCart2 from './lifttech-solutions-ltd-fr-cart-2';

describe(`with lifttechSolutionsLtdFrCart2 preset`, () => {
  it(`should return a lifttechSolutionsLtdFrCart2 preset`, () => {
    const lifttechSolutionsLtdFrCart2Preset =
      lifttechSolutionsLtdFrCart2(1).build<TOrderFromCartDraft>();
    expect(lifttechSolutionsLtdFrCart2Preset).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-fr-cart-2",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": "lifttech-solutions-ltd-fr-from-cart-2",
        "orderState": "Complete",
        "paymentState": "Paid",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Delivered",
        "state": undefined,
        "version": 1,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdFrCart2 preset when built for graphql`, () => {
    const lifttechSolutionsLtdFrCart2PresetGraphql =
      lifttechSolutionsLtdFrCart2(1).buildGraphql<TOrderFromCartDraft>();
    expect(lifttechSolutionsLtdFrCart2PresetGraphql).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-fr-cart-2",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": "lifttech-solutions-ltd-fr-from-cart-2",
        "orderState": "Complete",
        "paymentState": "Paid",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Delivered",
        "state": undefined,
        "version": 1,
      }
    `);
  });
});
