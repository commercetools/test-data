import type { TInventoryEntryDraft } from '../../../types';
import skuCcc567YzGreenDefault from './sku-ccc567-yz-green-default';

describe(`with skuCcc567YzGreenDefault preset and default-warehouse channel`, () => {
  it(`should return a skuCcc567YzGreenDefault preset`, () => {
    const skuCcc567YzGreenDefaultPreset =
      skuCcc567YzGreenDefault().build<TInventoryEntryDraft>();
    expect(skuCcc567YzGreenDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCcc567YzGreenDefault preset when built for graphql`, () => {
    const skuCcc567YzGreenDefaultPresetGraphql =
      skuCcc567YzGreenDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuCcc567YzGreenDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
