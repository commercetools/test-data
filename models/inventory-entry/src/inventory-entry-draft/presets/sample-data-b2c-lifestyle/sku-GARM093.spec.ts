import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuGARM093 from './sku-GARM093';

describe('With skuGARM093 preset', () => {
  it('should return skuGARM093 preset', () => {
    const skuGARM093Preset = skuGARM093().build<TInventoryEntryDraft>();
    expect(skuGARM093Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GARM-093",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuGARM093 preset when built for GraphQL', () => {
    const skuGARM093PresetGraphql =
      skuGARM093().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGARM093PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GARM-093",
        "supplyChannel": undefined,
      }
    `);
  });
});
