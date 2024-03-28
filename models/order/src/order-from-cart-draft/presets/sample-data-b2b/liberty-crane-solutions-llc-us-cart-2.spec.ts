import type { TOrderFromCartDraft } from '../../../types';
import libertyCraneSolutionsLlcUsCart2 from './liberty-crane-solutions-llc-us-cart-2';

describe(`with libertyCraneSolutionsLlcUsCart2 preset`, () => {
  it(`should return a libertyCraneSolutionsLlcUsCart2 preset`, () => {
    const libertyCraneSolutionsLlcUsCart2Preset =
      libertyCraneSolutionsLlcUsCart2(1).build<TOrderFromCartDraft>();
    expect(libertyCraneSolutionsLlcUsCart2Preset).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "liberty-crane-solutions-llc-us-cart-2",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": "liberty-crane-solutions-llc-us-from-cart-2",
        "orderState": "Confirmed",
        "paymentState": "Paid",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Ready",
        "state": undefined,
        "version": 1,
      }
    `);
  });

  it(`should return a libertyCraneSolutionsLlcUsCart2 preset when built for graphql`, () => {
    const libertyCraneSolutionsLlcUsCart2PresetGraphql =
      libertyCraneSolutionsLlcUsCart2(1).buildGraphql<TOrderFromCartDraft>();
    expect(libertyCraneSolutionsLlcUsCart2PresetGraphql).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "liberty-crane-solutions-llc-us-cart-2",
          "typeId": "cart",
        },
        "custom": undefined,
        "orderNumber": "liberty-crane-solutions-llc-us-from-cart-2",
        "orderState": "Confirmed",
        "paymentState": "Paid",
        "purchaseOrderNumber": undefined,
        "shipmentState": "Ready",
        "state": undefined,
        "version": 1,
      }
    `);
  });
});
