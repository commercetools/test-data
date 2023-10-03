import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuNTSS07 from './sku-NTSS07';

describe('With skuNTSS07 preset', () => {
  it('should return skuNTSS07 preset', () => {
    const skuNTSS07Preset = skuNTSS07().build<TInventoryEntryDraft>();
    expect(skuNTSS07Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-07",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuNTSS07 preset when built for GraphQL', () => {
    const skuNTSS07PresetGraphql =
      skuNTSS07().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNTSS07PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-07",
        "supplyChannel": undefined,
      }
    `);
  });
});
