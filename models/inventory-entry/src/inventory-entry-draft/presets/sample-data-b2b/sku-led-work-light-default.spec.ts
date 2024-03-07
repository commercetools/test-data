import type { TInventoryEntryDraft } from '../../../types';
import skuLedWorkLightDefault from './sku-led-work-light-default';

describe(`with skuLedWorkLightDefault preset and default-warehouse channel`, () => {
  it(`should return a skuLedWorkLightDefault preset`, () => {
    const skuLedWorkLightDefaultPreset =
      skuLedWorkLightDefault().build<TInventoryEntryDraft>();
    expect(skuLedWorkLightDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "led-work-light-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "led-work-light",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuLedWorkLightDefault preset when built for graphql`, () => {
    const skuLedWorkLightDefaultPresetGraphql =
      skuLedWorkLightDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuLedWorkLightDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "led-work-light-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "led-work-light",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
