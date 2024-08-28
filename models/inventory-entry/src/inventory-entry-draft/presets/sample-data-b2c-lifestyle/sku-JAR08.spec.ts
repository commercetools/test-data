import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuJAR08 from './sku-JAR08';

describe('With skuJAR08 preset', () => {
  it('should return skuJAR08 preset', () => {
    const skuJAR08Preset = skuJAR08().build<TInventoryEntryDraft>();
    expect(skuJAR08Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "JAR-08",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuJAR08 preset when built for GraphQL', () => {
    const skuJAR08PresetGraphql =
      skuJAR08().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJAR08PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "JAR-08",
        "supplyChannel": undefined,
      }
    `);
  });
});
