import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuRB01Channel from './sku-RB01-channel';

describe('with skuRB01Channel preset', () => {
  it('should return skuRB01Channel preset', () => {
    const skuRB01Preset = skuRB01Channel().build<TInventoryEntryDraft>();
    expect(skuRB01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RB-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it('should return skuRB01Channel preset when built for GraphQL', () => {
    const skuRB01PresetGraphql =
      skuRB01Channel().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRB01PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RB-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });
});
