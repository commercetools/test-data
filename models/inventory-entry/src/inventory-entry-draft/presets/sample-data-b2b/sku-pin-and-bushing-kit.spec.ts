import type { TInventoryEntryDraft } from '../../../types';
import skuPinAndBushingKit from './sku-pin-and-bushing-kit';

describe(`with skuPinAndBushingKit preset`, () => {
  it(`should return a skuPinAndBushingKit preset`, () => {
    const skuPinAndBushingKitPreset =
      skuPinAndBushingKit().build<TInventoryEntryDraft>();
    expect(skuPinAndBushingKitPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pin-and-bushing-kit",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuPinAndBushingKit preset when built for graphql`, () => {
    const skuPinAndBushingKitPresetGraphql =
      skuPinAndBushingKit().buildGraphql<TInventoryEntryDraft>();
    expect(skuPinAndBushingKitPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pin-and-bushing-kit",
        "supplyChannel": undefined,
      }
    `);
  });
});
