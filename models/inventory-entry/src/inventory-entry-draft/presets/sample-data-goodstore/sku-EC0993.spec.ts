import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuEC0993 from './sku-EC0993';

describe('With skuEC0993 preset', () => {
  it('should return skuEC0993 preset', () => {
    const skuEC0993Preset = skuEC0993().build<TInventoryEntryDraft>();
    expect(skuEC0993Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "EC-0993",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuEC0993 preset when built for GraphQL', () => {
    const skuEC0993PresetGraphql =
      skuEC0993().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEC0993PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "EC-0993",
        "supplyChannel": undefined,
      }
    `);
  });
});
