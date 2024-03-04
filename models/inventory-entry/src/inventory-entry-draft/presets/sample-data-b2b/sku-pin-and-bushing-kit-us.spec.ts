import type { TInventoryEntryDraft } from '../../../types';
import skuPinAndBushingKitUs from './sku-pin-and-bushing-kit-us';

describe(`with skuPinAndBushingKitUs preset and us-warehouse channel`, () => {
  it(`should return a skuPinAndBushingKitUs preset`, () => {
    const skuPinAndBushingKitUsPreset =
      skuPinAndBushingKitUs().build<TInventoryEntryDraft>();
    expect(skuPinAndBushingKitUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pin-and-bushing-kit-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pin-and-bushing-kit",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuPinAndBushingKitUs preset when built for graphql`, () => {
    const skuPinAndBushingKitUsPresetGraphql =
      skuPinAndBushingKitUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuPinAndBushingKitUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pin-and-bushing-kit-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pin-and-bushing-kit",
        "supplyChannel": undefined,
      }
    `);
  });
});
