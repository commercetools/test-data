import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-esp-1';

describe(`with skuEsp1 preset`, () => {
  it(`should return a skuEsp1 preset when built for rest`, () => {
    const skuEsp1Preset = presets.restPreset().build();
    expect(skuEsp1Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ESP-1",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEsp1 preset when built for graphql`, () => {
    const skuEsp1Preset = presets.graphqlPreset().build();
    expect(skuEsp1Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ESP-1",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEsp1 preset when built for legacy rest`, () => {
    const skuEsp1Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEsp1Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ESP-1",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEsp1 preset when built for legacy graphql`, () => {
    const skuEsp1Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEsp1Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ESP-1",
        "supplyChannel": undefined,
      }
    `);
  });
});
