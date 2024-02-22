import type { TInventoryEntryDraft } from '../../../types';
import skuZz456StRed from './sku-zz-456-st-red';

describe(`with skuZz456StRed preset`, () => {
  it(`should return a skuZz456StRed preset`, () => {
    const skuZz456StRedPreset = skuZz456StRed().build<TInventoryEntryDraft>();
    expect(skuZz456StRedPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuZz456StRed preset when built for graphql`, () => {
    const skuZz456StRedPresetGraphql =
      skuZz456StRed().buildGraphql<TInventoryEntryDraft>();
    expect(skuZz456StRedPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
