import type { TInventoryEntryDraft } from '../../../types';
import skuTt456StGreenDefault from './sku-tt456-st-green-default';

describe(`with skuTt456StGreenDefault preset and default-warehouse channel`, () => {
  it(`should return a skuTt456StGreenDefault preset`, () => {
    const skuTt456StGreenDefaultPreset =
      skuTt456StGreenDefault().build<TInventoryEntryDraft>();
    expect(skuTt456StGreenDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tt456-st-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuTt456StGreenDefault preset when built for graphql`, () => {
    const skuTt456StGreenDefaultPresetGraphql =
      skuTt456StGreenDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuTt456StGreenDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tt456-st-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
