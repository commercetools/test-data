import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuCARM023 from './sku-CARM023';

describe('With skuCARM023 preset', () => {
  it('should return skuCARM023 preset', () => {
    const skuCARM023Preset = skuCARM023().build<TInventoryEntryDraft>();
    expect(skuCARM023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CARM-023",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuCARM023 preset when built for GraphQL', () => {
    const skuCARM023PresetGraphql =
      skuCARM023().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCARM023PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CARM-023",
        "supplyChannel": undefined,
      }
    `);
  });
});
