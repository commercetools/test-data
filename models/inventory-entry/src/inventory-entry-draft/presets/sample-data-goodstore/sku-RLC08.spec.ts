import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuRLC08 from './sku-RLC08';

describe('With skuRLC08 preset', () => {
  it('should return skuRLC08 preset', () => {
    const skuRLC08Preset = skuRLC08().build<TInventoryEntryDraft>();
    expect(skuRLC08Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RLC-08",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuRLC08 preset when built for GraphQL', () => {
    const skuRLC08PresetGraphql =
      skuRLC08().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRLC08PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RLC-08",
        "supplyChannel": undefined,
      }
    `);
  });
});
