import type { TInventoryEntryDraft } from '../../../types';
import skuLedWorkLightEu from './sku-led-work-light-eu';

describe(`with skuLedWorkLightEu preset and eu-warehouse channel`, () => {
  it(`should return a skuLedWorkLightEu preset`, () => {
    const skuLedWorkLightEuPreset =
      skuLedWorkLightEu().build<TInventoryEntryDraft>();
    expect(skuLedWorkLightEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "led-work-light-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "led-work-light",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuLedWorkLightEu preset when built for graphql`, () => {
    const skuLedWorkLightEuPresetGraphql =
      skuLedWorkLightEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuLedWorkLightEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "led-work-light-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "led-work-light",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
