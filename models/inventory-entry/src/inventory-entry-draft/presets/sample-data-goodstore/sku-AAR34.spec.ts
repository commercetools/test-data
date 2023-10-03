import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuAAR34 from './sku-AAR34';

describe('With skuAAR34 preset', () => {
  it('should return skuAAR34 preset', () => {
    const skuAAR34Preset = skuAAR34().build<TInventoryEntryDraft>();
    expect(skuAAR34Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "AAR-34",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuAAR34 preset when built for GraphQL', () => {
    const skuAAR34PresetGraphql =
      skuAAR34().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAAR34PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "AAR-34",
        "supplyChannel": undefined,
      }
    `);
  });
});
