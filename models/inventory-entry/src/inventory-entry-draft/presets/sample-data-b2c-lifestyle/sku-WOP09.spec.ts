import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuWOP09 from './sku-WOP09';

describe('With skuWOP09 preset', () => {
  it('should return skuWOP09 preset', () => {
    const skuWOP09Preset = skuWOP09().build<TInventoryEntryDraft>();
    expect(skuWOP09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WOP-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuWOP09 preset when built for GraphQL', () => {
    const skuWOP09PresetGraphql =
      skuWOP09().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWOP09PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WOP-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
