import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuMWT01 from './sku-MWT01';

describe('With skuMWT01 preset', () => {
  it('should return skuMWT01 preset', () => {
    const skuMWT01Preset = skuMWT01().build<TInventoryEntryDraft>();
    expect(skuMWT01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MWT-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuMWT01 preset when built for GraphQL', () => {
    const skuMWT01PresetGraphql =
      skuMWT01().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMWT01PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MWT-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
