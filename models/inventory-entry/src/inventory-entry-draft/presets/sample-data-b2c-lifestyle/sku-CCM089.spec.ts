import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuCCM089 from './sku-CCM089';

describe('With skuCCM089 preset', () => {
  it('should return skuCCM089 preset', () => {
    const skuCCM089Preset = skuCCM089().build<TInventoryEntryDraft>();
    expect(skuCCM089Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CCM-089",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuCCM089 preset when built for GraphQL', () => {
    const skuCCM089PresetGraphql =
      skuCCM089().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCCM089PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CCM-089",
        "supplyChannel": undefined,
      }
    `);
  });
});
