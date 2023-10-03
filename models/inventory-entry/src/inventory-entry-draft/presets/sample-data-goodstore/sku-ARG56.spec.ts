import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuARG56 from './sku-ARG56';

describe('With skuARG56 preset', () => {
  it('should return skuARG56 preset', () => {
    const skuARG56Preset = skuARG56().build<TInventoryEntryDraft>();
    expect(skuARG56Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ARG-56",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuARG56 preset when built for GraphQL', () => {
    const skuARG56PresetGraphql =
      skuARG56().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuARG56PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ARG-56",
        "supplyChannel": undefined,
      }
    `);
  });
});
