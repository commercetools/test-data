import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuCWG01 from './sku-CWG01';

describe('With skuCWG01 preset', () => {
  it('should return skuCWG01 preset', () => {
    const skuCWG01Preset = skuCWG01().build<TInventoryEntryDraft>();
    expect(skuCWG01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CWG-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuCWG01 preset when built for GraphQL', () => {
    const skuCWG01PresetGraphql =
      skuCWG01().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCWG01PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CWG-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
