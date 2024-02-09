import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuLPQB084 from './sku-LPQB084';

describe('With skuLPQB084 preset', () => {
  it('should return skuLPQB084 preset', () => {
    const skuLPQB084Preset = skuLPQB084().build<TInventoryEntryDraft>();
    expect(skuLPQB084Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LPQB-084",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuLPQB084 preset when built for GraphQL', () => {
    const skuLPQB084PresetGraphql =
      skuLPQB084().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLPQB084PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LPQB-084",
        "supplyChannel": undefined,
      }
    `);
  });
});
