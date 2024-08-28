import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuSTM09 from './sku-STM09';

describe('With skuSTM09 preset', () => {
  it('should return skuSTM09 preset', () => {
    const skuSTM09Preset = skuSTM09().build<TInventoryEntryDraft>();
    expect(skuSTM09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "STM-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuSTM09 preset when built for GraphQL', () => {
    const skuSTM09PresetGraphql =
      skuSTM09().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSTM09PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "STM-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
