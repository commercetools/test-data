import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuBCOAS08 from './sku-BCOAS08';

describe('With skuBCOAS08 preset', () => {
  it('should return skuBCOAS08 preset', () => {
    const skuBCOAS08Preset = skuBCOAS08().build<TInventoryEntryDraft>();
    expect(skuBCOAS08Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BCOAS-08",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuBCOAS08 preset when built for GraphQL', () => {
    const skuBCOAS08PresetGraphql =
      skuBCOAS08().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBCOAS08PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BCOAS-08",
        "supplyChannel": undefined,
      }
    `);
  });
});
