import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuBA092 from './sku-BA092';

describe('With skuBA092 preset', () => {
  it('should return skuBA092 preset', () => {
    const skuBA092Preset = skuBA092().build<TInventoryEntryDraft>();
    expect(skuBA092Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "BA-092",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuBA092 preset when built for GraphQL', () => {
    const skuBA092PresetGraphql =
      skuBA092().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBA092PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "BA-092",
        "supplyChannel": undefined,
      }
    `);
  });
});
