import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuLCP01 from './sku-LCP01';

describe('With skuLCP01 preset', () => {
  it('should return skuLCP01 preset', () => {
    const skuLCP01Preset = skuLCP01().build<TInventoryEntryDraft>();
    expect(skuLCP01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 74,
        "restockableInDays": undefined,
        "sku": "LCP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuLCP01 preset when built for GraphQL', () => {
    const skuLCP01PresetGraphql =
      skuLCP01().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLCP01PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 74,
        "restockableInDays": undefined,
        "sku": "LCP-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
