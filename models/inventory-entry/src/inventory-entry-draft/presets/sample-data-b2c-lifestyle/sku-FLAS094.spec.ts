import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuFLAS094 from './sku-FLAS094';

describe('With skuFLAS094 preset', () => {
  it('should return skuFLAS094 preset', () => {
    const skuFLAS094Preset = skuFLAS094().build<TInventoryEntryDraft>();
    expect(skuFLAS094Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "FLAS-094",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuFLAS094 preset when built for GraphQL', () => {
    const skuFLAS094PresetGraphql =
      skuFLAS094().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFLAS094PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "FLAS-094",
        "supplyChannel": undefined,
      }
    `);
  });
});
