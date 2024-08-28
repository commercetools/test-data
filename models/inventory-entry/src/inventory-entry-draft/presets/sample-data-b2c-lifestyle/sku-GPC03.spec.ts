import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuGPC03 from './sku-GPC03';

describe('With skuGPC03 preset', () => {
  it('should return skuGPC03 preset', () => {
    const skuGPC03Preset = skuGPC03().build<TInventoryEntryDraft>();
    expect(skuGPC03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GPC-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuGPC03 preset when built for GraphQL', () => {
    const skuGPC03PresetGraphql =
      skuGPC03().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGPC03PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GPC-03",
        "supplyChannel": undefined,
      }
    `);
  });
});
