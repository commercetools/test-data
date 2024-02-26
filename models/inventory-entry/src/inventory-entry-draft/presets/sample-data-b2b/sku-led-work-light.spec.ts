import type { TInventoryEntryDraft } from '../../../types';
import skuLedWorkLight from './sku-led-work-light';

describe(`with skuLedWorkLight preset`, () => {
  it(`should return a skuLedWorkLight preset`, () => {
    const skuLedWorkLightPreset =
      skuLedWorkLight().build<TInventoryEntryDraft>();
    expect(skuLedWorkLightPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "led-work-light",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLedWorkLight preset when built for graphql`, () => {
    const skuLedWorkLightPresetGraphql =
      skuLedWorkLight().buildGraphql<TInventoryEntryDraft>();
    expect(skuLedWorkLightPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "led-work-light",
        "supplyChannel": undefined,
      }
    `);
  });
});
