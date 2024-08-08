import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuRB01 from './sku-RB01';

describe('With skuRB01 preset', () => {
  it('should return skuRB01 preset', () => {
    const skuRB01Preset = skuRB01().build<TInventoryEntryDraft>();
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

  it('should return skuRB01 preset when built for GraphQL', () => {
    const skuRB01PresetGraphql =
      skuRB01().buildGraphql<TInventoryEntryDraftGraphql>();
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
