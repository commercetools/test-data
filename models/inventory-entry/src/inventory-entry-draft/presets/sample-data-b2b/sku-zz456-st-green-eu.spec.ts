import type { TInventoryEntryDraft } from '../../../types';
import skuZz456StGreenEu from './sku-zz456-st-green-eu';

describe(`with skuZz456StGreenEu preset and eu-warehouse channel`, () => {
  it(`should return a skuZz456StGreenEu preset`, () => {
    const skuZz456StGreenEuPreset =
      skuZz456StGreenEu().build<TInventoryEntryDraft>();
    expect(skuZz456StGreenEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuZz456StGreenEu preset when built for graphql`, () => {
    const skuZz456StGreenEuPresetGraphql =
      skuZz456StGreenEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuZz456StGreenEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
