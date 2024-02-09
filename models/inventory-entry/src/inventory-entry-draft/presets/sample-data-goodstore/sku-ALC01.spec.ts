import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuALC01 from './sku-ALC01';

describe('With skuALC01 preset', () => {
  it('should return skuALC01 preset', () => {
    const skuALC01Preset = skuALC01().build<TInventoryEntryDraft>();
    expect(skuALC01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 73,
        "restockableInDays": undefined,
        "sku": "ALC-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuALC01 preset when built for GraphQL', () => {
    const skuALC01PresetGraphql =
      skuALC01().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuALC01PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 73,
        "restockableInDays": undefined,
        "sku": "ALC-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
