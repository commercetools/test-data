import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuPAP01 from './sku-PAP01';

describe('With skuPAP01 preset', () => {
  it('should return skuPAP01 preset', () => {
    const skuPAP01Preset = skuPAP01().build<TInventoryEntryDraft>();
    expect(skuPAP01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 95,
        "restockableInDays": undefined,
        "sku": "PAP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuPAP01 preset when built for GraphQL', () => {
    const skuPAP01PresetGraphql =
      skuPAP01().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPAP01PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 95,
        "restockableInDays": undefined,
        "sku": "PAP-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
