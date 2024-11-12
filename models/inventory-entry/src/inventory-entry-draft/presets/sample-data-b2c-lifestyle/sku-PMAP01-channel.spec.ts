import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuPMAP01Channel from './sku-PMAP01-channel';

describe('with skuPMAP01Channel preset', () => {
  it('should return skuPMAP01Channel preset', () => {
    const skuPMAP01Preset = skuPMAP01Channel().build<TInventoryEntryDraft>();
    expect(skuPMAP01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 91,
        "restockableInDays": undefined,
        "sku": "PMAP-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it('should return skuPMAP01Channel preset when built for GraphQL', () => {
    const skuPMAP01PresetGraphql =
      skuPMAP01Channel().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPMAP01PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 91,
        "restockableInDays": undefined,
        "sku": "PMAP-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });
});
