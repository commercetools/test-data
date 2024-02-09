import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuSPC06 from './sku-SPC06';

describe('With skuSPC06 preset', () => {
  it('should return skuSPC06 preset', () => {
    const skuSPC06Preset = skuSPC06().build<TInventoryEntryDraft>();
    expect(skuSPC06Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SPC-06",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuSPC06 preset when built for GraphQL', () => {
    const skuSPC06PresetGraphql =
      skuSPC06().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSPC06PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SPC-06",
        "supplyChannel": undefined,
      }
    `);
  });
});
