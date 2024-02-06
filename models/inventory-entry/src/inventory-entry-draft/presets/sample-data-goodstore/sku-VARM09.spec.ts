import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuVARM09 from './sku-VARM09';

describe('With skuVARM09 preset', () => {
  it('should return skuVARM09 preset', () => {
    const skuVARM09Preset = skuVARM09().build<TInventoryEntryDraft>();
    expect(skuVARM09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "VARM-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuVARM09 preset when built for GraphQL', () => {
    const skuVARM09PresetGraphql =
      skuVARM09().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuVARM09PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "VARM-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
