import type { TInventoryEntryDraft } from '../../../types';
import skuWw567YzBlueDefault from './sku-ww567-yz-blue-default';

describe(`with skuWw567YzBlueDefault preset and default-warehouse channel`, () => {
  it(`should return a skuWw567YzBlueDefault preset`, () => {
    const skuWw567YzBlueDefaultPreset =
      skuWw567YzBlueDefault().build<TInventoryEntryDraft>();
    expect(skuWw567YzBlueDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWw567YzBlueDefault preset when built for graphql`, () => {
    const skuWw567YzBlueDefaultPresetGraphql =
      skuWw567YzBlueDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuWw567YzBlueDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
