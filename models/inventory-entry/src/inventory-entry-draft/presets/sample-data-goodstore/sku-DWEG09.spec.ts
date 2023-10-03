import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuDWEG09 from './sku-DWEG09';

describe('With skuDWEG09 preset', () => {
  it('should return skuDWEG09 preset', () => {
    const skuDWEG09Preset = skuDWEG09().build<TInventoryEntryDraft>();
    expect(skuDWEG09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "DWEG-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuDWEG09 preset when built for GraphQL', () => {
    const skuDWEG09PresetGraphql =
      skuDWEG09().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDWEG09PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "DWEG-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
