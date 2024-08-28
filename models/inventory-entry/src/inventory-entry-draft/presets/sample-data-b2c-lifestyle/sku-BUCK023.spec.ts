import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuBUCK023 from './sku-BUCK023';

describe('With skuBUCK023 preset', () => {
  it('should return skuBUCK023 preset', () => {
    const skuBUCK023Preset = skuBUCK023().build<TInventoryEntryDraft>();
    expect(skuBUCK023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BUCK-023",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuBUCK023 preset when built for GraphQL', () => {
    const skuBUCK023PresetGraphql =
      skuBUCK023().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBUCK023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BUCK-023",
        "supplyChannel": undefined,
      }
    `);
  });
});
