import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuNR09 from './sku-NR09';

describe('With skuNR09 preset', () => {
  it('should return skuNR09 preset', () => {
    const skuNR09Preset = skuNR09().build<TInventoryEntryDraft>();
    expect(skuNR09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NR-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuNR09 preset when built for GraphQL', () => {
    const skuNR09PresetGraphql =
      skuNR09().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNR09PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NR-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
