import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuLAMR03 from './sku-LAMR03';

describe('With skuLAMR03 preset', () => {
  it('should return skuLAMR03 preset', () => {
    const skuLAMR03Preset = skuLAMR03().build<TInventoryEntryDraft>();
    expect(skuLAMR03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LAMR-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuLAMR03 preset when built for GraphQL', () => {
    const skuLAMR03PresetGraphql =
      skuLAMR03().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLAMR03PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LAMR-03",
        "supplyChannel": undefined,
      }
    `);
  });
});
