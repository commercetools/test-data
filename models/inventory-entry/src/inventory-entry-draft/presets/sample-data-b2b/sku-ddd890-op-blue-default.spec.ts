import type { TInventoryEntryDraft } from '../../../types';
import skuDdd890OpBlueDefault from './sku-ddd890-op-blue-default';

describe(`with skuDdd890OpBlueDefault preset and default-warehouse channel`, () => {
  it(`should return a skuDdd890OpBlueDefault preset`, () => {
    const skuDdd890OpBlueDefaultPreset =
      skuDdd890OpBlueDefault().build<TInventoryEntryDraft>();
    expect(skuDdd890OpBlueDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDdd890OpBlueDefault preset when built for graphql`, () => {
    const skuDdd890OpBlueDefaultPresetGraphql =
      skuDdd890OpBlueDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuDdd890OpBlueDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
