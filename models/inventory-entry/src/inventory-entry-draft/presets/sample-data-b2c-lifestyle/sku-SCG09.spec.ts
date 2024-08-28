import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuSCG09 from './sku-SCG09';

describe('With skuSCG09 preset', () => {
  it('should return skuSCG09 preset', () => {
    const skuSCG09Preset = skuSCG09().build<TInventoryEntryDraft>();
    expect(skuSCG09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SCG-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuSCG09 preset when built for GraphQL', () => {
    const skuSCG09PresetGraphql =
      skuSCG09().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSCG09PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SCG-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
