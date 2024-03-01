import type { TOrderFromCartDraft } from '../../../types';
import eagleHeavyLiftTechnologiesIncUsCart2 from './eagle-heavy-lift-technologies-inc-us-cart-2';

describe(`with eagleHeavyLiftTechnologiesIncUsCart2 preset`, () => {
  it(`should return a eagleHeavyLiftTechnologiesIncUsCart2 preset`, () => {
    const eagleHeavyLiftTechnologiesIncUsCart2Preset =
      eagleHeavyLiftTechnologiesIncUsCart2(1).build<TOrderFromCartDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsCart2Preset).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "eagle-heavy-lift-technologies-inc-us-cart-2",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": "eagle-heavy-lift-technologies-inc-us-cart-2",
        "orderState": "Open",
        "paymentState": "Pending",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Pending",
        "state": undefined,
        "version": 1,
      }
    `);
  });

  it(`should return a eagleHeavyLiftTechnologiesIncUsCart2 preset when built for graphql`, () => {
    const eagleHeavyLiftTechnologiesIncUsCart2PresetGraphql =
      eagleHeavyLiftTechnologiesIncUsCart2(
        1
      ).buildGraphql<TOrderFromCartDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsCart2PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "eagle-heavy-lift-technologies-inc-us-cart-2",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": "eagle-heavy-lift-technologies-inc-us-cart-2",
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
