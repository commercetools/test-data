import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuADARM04 from './sku-ADARM04';

describe('With skuADARM04 preset', () => {
  it('should return skuADARM04 preset', () => {
    const skuADARM04Preset = skuADARM04().build<TInventoryEntryDraft>();
    expect(skuADARM04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ADARM-04",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuADARM04 preset when built for GraphQL', () => {
    const skuADARM04PresetGraphql =
      skuADARM04().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuADARM04PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ADARM-04",
        "supplyChannel": undefined,
      }
    `);
  });
});
