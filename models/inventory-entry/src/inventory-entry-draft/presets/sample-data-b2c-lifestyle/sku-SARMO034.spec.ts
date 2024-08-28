import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuSARMO034 from './sku-SARMO034';

describe('With skuSARMO034 preset', () => {
  it('should return skuSARMO034 preset', () => {
    const skuSARMO034Preset = skuSARMO034().build<TInventoryEntryDraft>();
    expect(skuSARMO034Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SARMO-034",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuSARMO034 preset when built for GraphQL', () => {
    const skuSARMO034PresetGraphql =
      skuSARMO034().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSARMO034PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SARMO-034",
        "supplyChannel": undefined,
      }
    `);
  });
});
