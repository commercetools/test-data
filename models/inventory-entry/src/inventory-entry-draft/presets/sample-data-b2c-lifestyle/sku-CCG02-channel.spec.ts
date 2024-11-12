import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuCCG02Channel from './sku-CCG02-channel';

describe('with skuCCG02Channel preset', () => {
  it('should return skuCCG02Channel preset', () => {
    const skuCCG02Preset = skuCCG02Channel().build<TInventoryEntryDraft>();
    expect(skuCCG02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CCG-02",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it('should return skuCCG02Channel preset when built for GraphQL', () => {
    const skuCCG02PresetGraphql =
      skuCCG02Channel().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCCG02PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CCG-02",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });
});
