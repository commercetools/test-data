import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuMCP01 from './sku-MCP01';

describe('With skuMCP01 preset', () => {
  it('should return skuMCP01 preset', () => {
    const skuMCP01Preset = skuMCP01().build<TInventoryEntryDraft>();
    expect(skuMCP01Preset).toMatchInlineSnapshot(`
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

  it('should return skuMCP01 preset when built for GraphQL', () => {
    const skuMCP01PresetGraphql =
      skuMCP01().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMCP01PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
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
