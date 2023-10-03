import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuADCT01 from './sku-ADCT01';

describe('With skuADCT01 preset', () => {
  it('should return skuADCT01 preset', () => {
    const skuADCT01Preset = skuADCT01().build<TInventoryEntryDraft>();
    expect(skuADCT01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 90,
        "restockableInDays": undefined,
        "sku": "ADCT-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuADCT01 preset when built for GraphQL', () => {
    const skuADCT01PresetGraphql =
      skuADCT01().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuADCT01PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 90,
        "restockableInDays": undefined,
        "sku": "ADCT-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
