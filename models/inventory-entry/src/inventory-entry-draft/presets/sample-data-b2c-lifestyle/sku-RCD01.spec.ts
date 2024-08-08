import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuRCD01 from './sku-RCD01';

describe('With skuRCD01 preset', () => {
  it('should return skuRCD01 preset', () => {
    const skuRCD01Preset = skuRCD01().build<TInventoryEntryDraft>();
    expect(skuRCD01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "RCD-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuRCD01 preset when built for GraphQL', () => {
    const skuRCD01PresetGraphql =
      skuRCD01().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRCD01PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "RCD-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
