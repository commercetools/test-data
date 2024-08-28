import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuCBM03 from './sku-CBM03';

describe('With skuCBM03 preset', () => {
  it('should return skuCBM03 preset', () => {
    const skuCBM03Preset = skuCBM03().build<TInventoryEntryDraft>();
    expect(skuCBM03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CBM-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuCBM03 preset when built for GraphQL', () => {
    const skuCBM03PresetGraphql =
      skuCBM03().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCBM03PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CBM-03",
        "supplyChannel": undefined,
      }
    `);
  });
});
