import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuSQB034 from './sku-SQB034';

describe('With skuSQB034 preset', () => {
  it('should return skuSQB034 preset', () => {
    const skuSQB034Preset = skuSQB034().build<TInventoryEntryDraft>();
    expect(skuSQB034Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SQB-034",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuSQB034 preset when built for GraphQL', () => {
    const skuSQB034PresetGraphql =
      skuSQB034().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSQB034PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SQB-034",
        "supplyChannel": undefined,
      }
    `);
  });
});
