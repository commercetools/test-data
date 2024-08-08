import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuMGD01 from './sku-MGD01';

describe('With skuMGD01 preset', () => {
  it('should return skuMGD01 preset', () => {
    const skuMGD01Preset = skuMGD01().build<TInventoryEntryDraft>();
    expect(skuMGD01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 76,
        "restockableInDays": undefined,
        "sku": "MGD-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuMGD01 preset when built for GraphQL', () => {
    const skuMGD01PresetGraphql =
      skuMGD01().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMGD01PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 76,
        "restockableInDays": undefined,
        "sku": "MGD-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
