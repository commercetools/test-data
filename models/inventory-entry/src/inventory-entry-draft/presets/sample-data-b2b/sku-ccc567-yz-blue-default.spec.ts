import type { TInventoryEntryDraft } from '../../../types';
import skuCcc567YzBlueDefault from './sku-ccc567-yz-blue-default';

describe(`with skuCcc567YzBlueDefault preset and default-warehouse channel`, () => {
  it(`should return a skuCcc567YzBlueDefault preset`, () => {
    const skuCcc567YzBlueDefaultPreset =
      skuCcc567YzBlueDefault().build<TInventoryEntryDraft>();
    expect(skuCcc567YzBlueDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCcc567YzBlueDefault preset when built for graphql`, () => {
    const skuCcc567YzBlueDefaultPresetGraphql =
      skuCcc567YzBlueDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuCcc567YzBlueDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
