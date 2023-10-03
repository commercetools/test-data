import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuCR098 from './sku-CR098';

describe('With skuCR098 preset', () => {
  it('should return skuCR098 preset', () => {
    const skuCR098Preset = skuCR098().build<TInventoryEntryDraft>();
    expect(skuCR098Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CR-098",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuCR098 preset when built for GraphQL', () => {
    const skuCR098PresetGraphql =
      skuCR098().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCR098PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CR-098",
        "supplyChannel": undefined,
      }
    `);
  });
});
