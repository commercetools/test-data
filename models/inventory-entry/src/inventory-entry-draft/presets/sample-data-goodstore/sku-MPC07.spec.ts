import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuMPC07 from './sku-MPC07';

describe('With skuMPC07 preset', () => {
  it('should return skuMPC07 preset', () => {
    const skuMPC07Preset = skuMPC07().build<TInventoryEntryDraft>();
    expect(skuMPC07Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MPC-07",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuMPC07 preset when built for GraphQL', () => {
    const skuMPC07PresetGraphql =
      skuMPC07().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMPC07PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MPC-07",
        "supplyChannel": undefined,
      }
    `);
  });
});
