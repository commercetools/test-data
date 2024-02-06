import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuGPC02 from './sku-GPC02';

describe('With skuGPC02 preset', () => {
  it('should return skuGPC02 preset', () => {
    const skuGPC02Preset = skuGPC02().build<TInventoryEntryDraft>();
    expect(skuGPC02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GPC-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuGPC02 preset when built for GraphQL', () => {
    const skuGPC02PresetGraphql =
      skuGPC02().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGPC02PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GPC-02",
        "supplyChannel": undefined,
      }
    `);
  });
});
