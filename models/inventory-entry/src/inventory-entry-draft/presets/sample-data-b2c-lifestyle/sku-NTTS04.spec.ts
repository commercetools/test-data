import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuNTTS04 from './sku-NTTS04';

describe('With skuNTTS04 preset', () => {
  it('should return skuNTTS04 preset', () => {
    const skuNTTS04Preset = skuNTTS04().build<TInventoryEntryDraft>();
    expect(skuNTTS04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTTS-04",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuNTTS04 preset when built for GraphQL', () => {
    const skuNTTS04PresetGraphql =
      skuNTTS04().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNTTS04PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTTS-04",
        "supplyChannel": undefined,
      }
    `);
  });
});
