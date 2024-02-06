import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuLBPC09 from './sku-LBPC09';

describe('With skuLBPC09 preset', () => {
  it('should return skuLBPC09 preset', () => {
    const skuLBPC09Preset = skuLBPC09().build<TInventoryEntryDraft>();
    expect(skuLBPC09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LBPC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuLBPC09 preset when built for GraphQL', () => {
    const skuLBPC09PresetGraphql =
      skuLBPC09().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLBPC09PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LBPC-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
