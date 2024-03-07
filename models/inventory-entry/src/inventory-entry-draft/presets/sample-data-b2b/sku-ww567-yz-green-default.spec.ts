import type { TInventoryEntryDraft } from '../../../types';
import skuWw567YzGreenDefault from './sku-ww567-yz-green-default';

describe(`with skuWw567YzGreenDefault preset and default-warehouse channel`, () => {
  it(`should return a skuWw567YzGreenDefault preset`, () => {
    const skuWw567YzGreenDefaultPreset =
      skuWw567YzGreenDefault().build<TInventoryEntryDraft>();
    expect(skuWw567YzGreenDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuWw567YzGreenDefault preset when built for graphql`, () => {
    const skuWw567YzGreenDefaultPresetGraphql =
      skuWw567YzGreenDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuWw567YzGreenDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
