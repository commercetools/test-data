import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuCOC0843 from './sku-COC0843';

describe('With skuCOC0843 preset', () => {
  it('should return skuCOC0843 preset', () => {
    const skuCOC0843Preset = skuCOC0843().build<TInventoryEntryDraft>();
    expect(skuCOC0843Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "COC-0843",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuCOC0843 preset when built for GraphQL', () => {
    const skuCOC0843PresetGraphql =
      skuCOC0843().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCOC0843PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "COC-0843",
        "supplyChannel": undefined,
      }
    `);
  });
});
