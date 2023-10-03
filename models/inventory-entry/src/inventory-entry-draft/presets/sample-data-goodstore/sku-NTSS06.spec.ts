import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuNTSS06 from './sku-NTSS06';

describe('With skuNTSS06 preset', () => {
  it('should return skuNTSS06 preset', () => {
    const skuNTSS06Preset = skuNTSS06().build<TInventoryEntryDraft>();
    expect(skuNTSS06Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-06",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuNTSS06 preset when built for GraphQL', () => {
    const skuNTSS06PresetGraphql =
      skuNTSS06().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNTSS06PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-06",
        "supplyChannel": undefined,
      }
    `);
  });
});
