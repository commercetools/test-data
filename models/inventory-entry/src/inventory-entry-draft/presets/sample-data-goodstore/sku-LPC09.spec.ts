import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuLPC09 from './sku-LPC09';

describe('With skuLPC09 preset', () => {
  it('should return skuLPC09 preset', () => {
    const skuLPC09Preset = skuLPC09().build<TInventoryEntryDraft>();
    expect(skuLPC09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LPC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuLPC09 preset when built for GraphQL', () => {
    const skuLPC09PresetGraphql =
      skuLPC09().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLPC09PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LPC-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
