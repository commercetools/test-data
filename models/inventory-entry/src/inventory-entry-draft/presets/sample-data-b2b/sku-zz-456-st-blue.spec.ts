import type { TInventoryEntryDraft } from '../../../types';
import skuZz456StBlue from './sku-zz-456-st-blue';

describe(`with skuZz456StBlue preset`, () => {
  it(`should return a skuZz456StBlue preset`, () => {
    const skuZz456StBluePreset = skuZz456StBlue().build<TInventoryEntryDraft>();
    expect(skuZz456StBluePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuZz456StBlue preset when built for graphql`, () => {
    const skuZz456StBluePresetGraphql =
      skuZz456StBlue().buildGraphql<TInventoryEntryDraft>();
    expect(skuZz456StBluePresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
