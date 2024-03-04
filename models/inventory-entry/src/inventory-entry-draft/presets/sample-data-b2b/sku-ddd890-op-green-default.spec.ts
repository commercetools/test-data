import type { TInventoryEntryDraft } from '../../../types';
import skuDdd890OpGreenDefault from './sku-ddd890-op-green-default';

describe(`with skuDdd890OpGreenDefault preset and default-warehouse channel`, () => {
  it(`should return a skuDdd890OpGreenDefault preset`, () => {
    const skuDdd890OpGreenDefaultPreset =
      skuDdd890OpGreenDefault().build<TInventoryEntryDraft>();
    expect(skuDdd890OpGreenDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuDdd890OpGreenDefault preset when built for graphql`, () => {
    const skuDdd890OpGreenDefaultPresetGraphql =
      skuDdd890OpGreenDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuDdd890OpGreenDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
