import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuTARM034 from './sku-TARM034';

describe('With skuTARM034 preset', () => {
  it('should return skuTARM034 preset', () => {
    const skuTARM034Preset = skuTARM034().build<TInventoryEntryDraft>();
    expect(skuTARM034Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "TARM-034",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuTARM034 preset when built for GraphQL', () => {
    const skuTARM034PresetGraphql =
      skuTARM034().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTARM034PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "TARM-034",
        "supplyChannel": undefined,
      }
    `);
  });
});
