import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuRB093 from './sku-RB093';

describe('With skuRB093 preset', () => {
  it('should return skuRB093 preset', () => {
    const skuRB093Preset = skuRB093().build<TInventoryEntryDraft>();
    expect(skuRB093Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RB-093",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuRB093 preset when built for GraphQL', () => {
    const skuRB093PresetGraphql =
      skuRB093().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRB093PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RB-093",
        "supplyChannel": undefined,
      }
    `);
  });
});
