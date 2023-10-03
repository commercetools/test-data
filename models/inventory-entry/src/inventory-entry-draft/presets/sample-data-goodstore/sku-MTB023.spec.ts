import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuMTB023 from './sku-MTB023';

describe('With skuMTB023 preset', () => {
  it('should return skuMTB023 preset', () => {
    const skuMTB023Preset = skuMTB023().build<TInventoryEntryDraft>();
    expect(skuMTB023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MTB-023",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuMTB023 preset when built for GraphQL', () => {
    const skuMTB023PresetGraphql =
      skuMTB023().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMTB023PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MTB-023",
        "supplyChannel": undefined,
      }
    `);
  });
});
