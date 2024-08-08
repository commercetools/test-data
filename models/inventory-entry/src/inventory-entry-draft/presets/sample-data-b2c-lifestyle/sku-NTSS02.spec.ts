import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuNTSS02 from './sku-NTSS02';

describe('With skuNTSS02 preset', () => {
  it('should return skuNTSS02 preset', () => {
    const skuNTSS02Preset = skuNTSS02().build<TInventoryEntryDraft>();
    expect(skuNTSS02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuNTSS02 preset when built for GraphQL', () => {
    const skuNTSS02PresetGraphql =
      skuNTSS02().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNTSS02PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-02",
        "supplyChannel": undefined,
      }
    `);
  });
});
