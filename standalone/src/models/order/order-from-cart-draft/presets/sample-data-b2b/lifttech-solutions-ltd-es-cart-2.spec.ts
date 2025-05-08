import type { TOrderFromCartDraft } from '../../../types';
import lifttechSolutionsLtdEsCart2 from './lifttech-solutions-ltd-es-cart-2';

describe(`with lifttechSolutionsLtdEsCart2 preset`, () => {
  it(`should return a lifttechSolutionsLtdEsCart2 preset`, () => {
    const lifttechSolutionsLtdEsCart2Preset =
      lifttechSolutionsLtdEsCart2(1).build<TOrderFromCartDraft>();
    expect(lifttechSolutionsLtdEsCart2Preset).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-es-cart-2",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": "lifttech-solutions-ltd-es-from-cart-2",
        "orderState": "Cancelled",
        "paymentState": "Failed",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Pending",
        "state": undefined,
        "version": 1,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdEsCart2 preset when built for graphql`, () => {
    const lifttechSolutionsLtdEsCart2PresetGraphql =
      lifttechSolutionsLtdEsCart2(1).buildGraphql<TOrderFromCartDraft>();
    expect(lifttechSolutionsLtdEsCart2PresetGraphql).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-es-cart-2",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": "lifttech-solutions-ltd-es-from-cart-2",
        "orderState": "Cancelled",
        "paymentState": "Failed",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Pending",
        "state": undefined,
        "version": 1,
      }
    `);
  });
});
