import type { TInventoryEntryDraft } from '../../../types';
import skuPinAndBushingKitEu from './sku-pin-and-bushing-kit-eu';

describe(`with skuPinAndBushingKitEu preset and eu-warehouse channel`, () => {
  it(`should return a skuPinAndBushingKitEu preset`, () => {
    const skuPinAndBushingKitEuPreset =
      skuPinAndBushingKitEu().build<TInventoryEntryDraft>();
    expect(skuPinAndBushingKitEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pin-and-bushing-kit-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pin-and-bushing-kit",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuPinAndBushingKitEu preset when built for graphql`, () => {
    const skuPinAndBushingKitEuPresetGraphql =
      skuPinAndBushingKitEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuPinAndBushingKitEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pin-and-bushing-kit-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pin-and-bushing-kit",
        "supplyChannel": undefined,
      }
    `);
  });
});
