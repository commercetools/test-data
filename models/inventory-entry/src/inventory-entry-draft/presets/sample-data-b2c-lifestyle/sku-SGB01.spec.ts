import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuSGB01 from './sku-SGB01';

describe('With skuSGB01 preset', () => {
  it('should return skuSGB01 preset', () => {
    const skuSGB01Preset = skuSGB01().build<TInventoryEntryDraft>();
    expect(skuSGB01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "SGB-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuSGB01 preset when built for GraphQL', () => {
    const skuSGB01PresetGraphql =
      skuSGB01().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSGB01PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "SGB-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
