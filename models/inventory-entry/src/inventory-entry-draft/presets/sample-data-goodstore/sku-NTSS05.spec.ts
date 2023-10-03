import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuNTSS05 from './sku-NTSS05';

describe('With skuNTSS05 preset', () => {
  it('should return skuNTSS05 preset', () => {
    const skuNTSS05Preset = skuNTSS05().build<TInventoryEntryDraft>();
    expect(skuNTSS05Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-05",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuNTSS05 preset when built for GraphQL', () => {
    const skuNTSS05PresetGraphql =
      skuNTSS05().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNTSS05PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-05",
        "supplyChannel": undefined,
      }
    `);
  });
});
