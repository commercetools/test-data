import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuCR098Channel from './sku-CR098-channel';

describe('with skuCR098Channel preset', () => {
  it('should return skuCR098Channel preset', () => {
    const skuCR098Preset = skuCR098Channel().build<TInventoryEntryDraft>();
    expect(skuCR098Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CR-098",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it('should return skuCR098Channel preset when built for GraphQL', () => {
    const skuCR098PresetGraphql =
      skuCR098Channel().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCR098PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CR-098",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });
});
