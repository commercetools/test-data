import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuIQB09 from './sku-IQB09';

describe('With skuIQB09 preset', () => {
  it('should return skuIQB09 preset', () => {
    const skuIQB09Preset = skuIQB09().build<TInventoryEntryDraft>();
    expect(skuIQB09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "IQB-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuIQB09 preset when built for GraphQL', () => {
    const skuIQB09PresetGraphql =
      skuIQB09().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIQB09PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "IQB-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
