import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuSPOO094 from './sku-SPOO094';

describe('With skuSPOO094 preset', () => {
  it('should return skuSPOO094 preset', () => {
    const skuSPOO094Preset = skuSPOO094().build<TInventoryEntryDraft>();
    expect(skuSPOO094Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SPOO-094",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuSPOO094 preset when built for GraphQL', () => {
    const skuSPOO094PresetGraphql =
      skuSPOO094().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSPOO094PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SPOO-094",
        "supplyChannel": undefined,
      }
    `);
  });
});
