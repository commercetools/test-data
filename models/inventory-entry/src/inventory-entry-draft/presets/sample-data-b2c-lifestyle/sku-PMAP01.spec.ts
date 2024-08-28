import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuPMAP01 from './sku-PMAP01';

describe('With skuPMAP01 preset', () => {
  it('should return skuPMAP01 preset', () => {
    const skuPMAP01Preset = skuPMAP01().build<TInventoryEntryDraft>();
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

  it('should return skuPMAP01 preset when built for GraphQL', () => {
    const skuPMAP01PresetGraphql =
      skuPMAP01().buildGraphql<TInventoryEntryDraftGraphql>();
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
