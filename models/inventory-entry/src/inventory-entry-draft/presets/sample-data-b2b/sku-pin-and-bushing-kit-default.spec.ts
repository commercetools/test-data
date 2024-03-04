import type { TInventoryEntryDraft } from '../../../types';
import skuPinAndBushingKitDefault from './sku-pin-and-bushing-kit-default';

describe(`with skuPinAndBushingKitDefault preset and default-warehouse channel`, () => {
  it(`should return a skuPinAndBushingKitDefault preset`, () => {
    const skuPinAndBushingKitDefaultPreset =
      skuPinAndBushingKitDefault().build<TInventoryEntryDraft>();
    expect(skuPinAndBushingKitDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pin-and-bushing-kit-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pin-and-bushing-kit",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPinAndBushingKitDefault preset when built for graphql`, () => {
    const skuPinAndBushingKitDefaultPresetGraphql =
      skuPinAndBushingKitDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuPinAndBushingKitDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pin-and-bushing-kit-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pin-and-bushing-kit",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
