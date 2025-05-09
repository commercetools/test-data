import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-mcp-01';

describe(`with skuMcp01 preset`, () => {
  it(`should return a skuMcp01 preset when built for rest`, () => {
    const skuMcp01Preset = presets.restPreset().build();
    expect(skuMcp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MCP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMcp01 preset when built for graphql`, () => {
    const skuMcp01Preset = presets.graphqlPreset().build();
    expect(skuMcp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MCP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMcp01 preset when built for legacy rest`, () => {
    const skuMcp01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMcp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MCP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMcp01 preset when built for legacy graphql`, () => {
    const skuMcp01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMcp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MCP-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
