import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuCST01 from './sku-CST01';

describe('With skuCST01 preset', () => {
  it('should return skuCST01 preset', () => {
    const skuCST01Preset = skuCST01().build<TInventoryEntryDraft>();
    expect(skuCST01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CST-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuCST01 preset when built for GraphQL', () => {
    const skuCST01PresetGraphql =
      skuCST01().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCST01PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CST-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
