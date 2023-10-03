import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuCTSS0983 from './sku-CTSS0983';

describe('With skuCTSS0983 preset', () => {
  it('should return skuCTSS0983 preset', () => {
    const skuCTSS0983Preset = skuCTSS0983().build<TInventoryEntryDraft>();
    expect(skuCTSS0983Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CTSS-0983",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuCTSS0983 preset when built for GraphQL', () => {
    const skuCTSS0983PresetGraphql =
      skuCTSS0983().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCTSS0983PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CTSS-0983",
        "supplyChannel": undefined,
      }
    `);
  });
});
