import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuCCG01 from './sku-CCG01';

describe('With skuCCG01 preset', () => {
  it('should return skuCCG01 preset', () => {
    const skuCCG01Preset = skuCCG01().build<TInventoryEntryDraft>();
    expect(skuCCG01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CCG-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuCCG01 preset when built for GraphQL', () => {
    const skuCCG01PresetGraphql =
      skuCCG01().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCCG01PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CCG-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
