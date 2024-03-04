import type { TInventoryEntryDraft } from '../../../types';
import skuZz456StGreenDefault from './sku-zz456-st-green-default';

describe(`with skuZz456StGreenDefault preset and default-warehouse channel`, () => {
  it(`should return a skuZz456StGreenDefault preset`, () => {
    const skuZz456StGreenDefaultPreset =
      skuZz456StGreenDefault().build<TInventoryEntryDraft>();
    expect(skuZz456StGreenDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuZz456StGreenDefault preset when built for graphql`, () => {
    const skuZz456StGreenDefaultPresetGraphql =
      skuZz456StGreenDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuZz456StGreenDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
