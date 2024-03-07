import type { TInventoryEntryDraft } from '../../../types';
import skuLedWorkLightUs from './sku-led-work-light-us';

describe(`with skuLedWorkLightUs preset and us-warehouse channel`, () => {
  it(`should return a skuLedWorkLightUs preset`, () => {
    const skuLedWorkLightUsPreset =
      skuLedWorkLightUs().build<TInventoryEntryDraft>();
    expect(skuLedWorkLightUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "led-work-light-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "led-work-light",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuLedWorkLightUs preset when built for graphql`, () => {
    const skuLedWorkLightUsPresetGraphql =
      skuLedWorkLightUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuLedWorkLightUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "led-work-light-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "led-work-light",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
