import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuNJOP09 from './sku-NJOP09';

describe('With skuNJOP09 preset', () => {
  it('should return skuNJOP09 preset', () => {
    const skuNJOP09Preset = skuNJOP09().build<TInventoryEntryDraft>();
    expect(skuNJOP09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "NJOP-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuNJOP09 preset when built for GraphQL', () => {
    const skuNJOP09PresetGraphql =
      skuNJOP09().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNJOP09PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "NJOP-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
