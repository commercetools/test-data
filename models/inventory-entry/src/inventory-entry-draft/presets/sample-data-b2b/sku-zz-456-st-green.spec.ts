import type { TInventoryEntryDraft } from '../../../types';
import skuZz456StGreen from './sku-zz-456-st-green';

describe(`with skuZz456StGreen preset`, () => {
  it(`should return a skuZz456StGreen preset`, () => {
    const skuZz456StGreenPreset =
      skuZz456StGreen().build<TInventoryEntryDraft>();
    expect(skuZz456StGreenPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuZz456StGreen preset when built for graphql`, () => {
    const skuZz456StGreenPresetGraphql =
      skuZz456StGreen().buildGraphql<TInventoryEntryDraft>();
    expect(skuZz456StGreenPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
