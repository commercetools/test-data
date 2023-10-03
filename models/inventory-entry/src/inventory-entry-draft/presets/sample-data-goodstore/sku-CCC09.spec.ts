import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuCCC09 from './sku-CCC09';

describe('With skuCCC09 preset', () => {
  it('should return skuCCC09 preset', () => {
    const skuCCC09Preset = skuCCC09().build<TInventoryEntryDraft>();
    expect(skuCCC09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CCC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuCCC09 preset when built for GraphQL', () => {
    const skuCCC09PresetGraphql =
      skuCCC09().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCCC09PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CCC-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
