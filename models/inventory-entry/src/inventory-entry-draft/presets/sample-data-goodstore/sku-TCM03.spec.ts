import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuTCM03 from './sku-TCM03';

describe('With skuTCM03 preset', () => {
  it('should return skuTCM03 preset', () => {
    const skuTCM03Preset = skuTCM03().build<TInventoryEntryDraft>();
    expect(skuTCM03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "TCM-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuTCM03 preset when built for GraphQL', () => {
    const skuTCM03PresetGraphql =
      skuTCM03().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTCM03PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "TCM-03",
        "supplyChannel": undefined,
      }
    `);
  });
});
