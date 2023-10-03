import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuCDG09 from './sku-CDG09';

describe('With skuCDG09 preset', () => {
  it('should return skuCDG09 preset', () => {
    const skuCDG09Preset = skuCDG09().build<TInventoryEntryDraft>();
    expect(skuCDG09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CDG-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuCDG09 preset when built for GraphQL', () => {
    const skuCDG09PresetGraphql =
      skuCDG09().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCDG09PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CDG-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
