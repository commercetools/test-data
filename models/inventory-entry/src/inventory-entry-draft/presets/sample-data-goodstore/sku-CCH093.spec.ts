import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuCCH093 from './sku-CCH093';

describe('With skuCCH093 preset', () => {
  it('should return skuCCH093 preset', () => {
    const skuCCH093Preset = skuCCH093().build<TInventoryEntryDraft>();
    expect(skuCCH093Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CCH-093",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuCCH093 preset when built for GraphQL', () => {
    const skuCCH093PresetGraphql =
      skuCCH093().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCCH093PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CCH-093",
        "supplyChannel": undefined,
      }
    `);
  });
});
