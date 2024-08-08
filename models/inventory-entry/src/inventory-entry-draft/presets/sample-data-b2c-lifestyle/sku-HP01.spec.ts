import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuHP01 from './sku-HP01';

describe('With skuHP01 preset', () => {
  it('should return skuHP01 preset', () => {
    const skuHP01Preset = skuHP01().build<TInventoryEntryDraft>();
    expect(skuHP01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "HP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuHP01 preset when built for GraphQL', () => {
    const skuHP01PresetGraphql =
      skuHP01().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHP01PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "HP-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
