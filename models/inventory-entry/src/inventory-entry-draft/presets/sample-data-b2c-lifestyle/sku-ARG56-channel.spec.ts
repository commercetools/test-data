import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuARG56Channel from './sku-ARG56-channel';

describe('with skuARG56Channel preset', () => {
  it('should return skuARG56Channel preset', () => {
    const skuARG56Preset = skuARG56Channel().build<TInventoryEntryDraft>();
    expect(skuARG56Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ARG-56",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it('should return skuARG56Channel preset when built for GraphQL', () => {
    const skuARG56PresetGraphql =
      skuARG56Channel().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuARG56PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ARG-56",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });
});
