import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuADPC7 from './sku-ADPC7';

describe('With skuADPC7 preset', () => {
  it('should return skuADPC7 preset', () => {
    const skuADPC7Preset = skuADPC7().build<TInventoryEntryDraft>();
    expect(skuADPC7Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ADPC-7",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuADPC7 preset when built for GraphQL', () => {
    const skuADPC7PresetGraphql =
      skuADPC7().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuADPC7PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ADPC-7",
        "supplyChannel": undefined,
      }
    `);
  });
});
