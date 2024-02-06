import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuWCSI09 from './sku-WCSI09';

describe('With skuWCSI09 preset', () => {
  it('should return skuWCSI09 preset', () => {
    const skuWCSI09Preset = skuWCSI09().build<TInventoryEntryDraft>();
    expect(skuWCSI09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WCSI-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuWCSI09 preset when built for GraphQL', () => {
    const skuWCSI09PresetGraphql =
      skuWCSI09().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWCSI09PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WCSI-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
