import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuMTSS01 from './sku-MTSS01';

describe('With skuMTSS01 preset', () => {
  it('should return skuMTSS01 preset', () => {
    const skuMTSS01Preset = skuMTSS01().build<TInventoryEntryDraft>();
    expect(skuMTSS01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 94,
        "restockableInDays": undefined,
        "sku": "MTSS-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuMTSS01 preset when built for GraphQL', () => {
    const skuMTSS01PresetGraphql =
      skuMTSS01().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMTSS01PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 94,
        "restockableInDays": undefined,
        "sku": "MTSS-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
