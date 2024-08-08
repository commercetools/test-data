import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuOTB07 from './sku-OTB07';

describe('With skuOTB07 preset', () => {
  it('should return skuOTB07 preset', () => {
    const skuOTB07Preset = skuOTB07().build<TInventoryEntryDraft>();
    expect(skuOTB07Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "OTB-07",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuOTB07 preset when built for GraphQL', () => {
    const skuOTB07PresetGraphql =
      skuOTB07().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuOTB07PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "OTB-07",
        "supplyChannel": undefined,
      }
    `);
  });
});
