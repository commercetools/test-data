import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuSST02 from './sku-SST02';

describe('With skuSST02 preset', () => {
  it('should return skuSST02 preset', () => {
    const skuSST02Preset = skuSST02().build<TInventoryEntryDraft>();
    expect(skuSST02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SST-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuSST02 preset when built for GraphQL', () => {
    const skuSST02PresetGraphql =
      skuSST02().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSST02PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SST-02",
        "supplyChannel": undefined,
      }
    `);
  });
});
